import * as actionTypes from './ActionTypes';
import Axios from '../../Hoc/Axios';
import { setDate, setHour, setCapitalLetter } from '../../Functions/Output';

export const setReposStart = () => { return { type : actionTypes.GET_REPOS_START } };
export const setReposFail = ( error ) => { return { type : actionTypes.GET_REPOS_FAIL, error : error } };
export const setReposSucces = ( repos ) => { return { type : actionTypes.GET_REPOS_SUCCESS, repos } };

export const getRepos = ( user ) => {
    return dispatch => {
        dispatch(setReposStart());
        const url = `users/${user}/repos`;
        Axios.get(url)
             .then( response => {
                const updatedRepositories = response.data.map( 
                        repository => {
                        const created = repository.created_at;
                        return {
                                title: setCapitalLetter(repository.name),
                                description: setCapitalLetter(repository.description),
                                stars:repository.stargazers_count,
                                watchers:repository.watchers_count,
                                forks:repository.forks_count,
                                creationDate: setDate(created),
                                creationHour: setHour(created)
                               }
                            });
                 dispatch(setReposSucces(updatedRepositories));
             })
             .catch( error => {
                 dispatch(setReposFail(error))
             });
    }
};