import * as actionTypes from './ActionTypes';
import Axios from '../../Hoc/Axios';
import { setCapitalLetter, setDate, setHour, getPartOfString } from '../Functions/Output';

export const setCommitsStart = () => { return { type : actionTypes.GET_COMMITS_START } };
export const setCommitsFail = ( error ) => { return { type : actionTypes.GET_COMMITS_FAIL, error : error } };
export const setCommitsSucces = ( commits ) => { return { type : actionTypes.GET_COMMITS_SUCCESS, commits } };

export const getCommits = ( user, repository ) => {
    return dispatch => {
        dispatch(setCommitsStart());
        const url = `repos/${user}/${repository}/commits`;
        console.log(url);
        Axios.get(url)
             .then( response => {
                 console.log(response.data);
                const updatedCommits = response.data.map(
                       c => {
                       return {
                            author: setCapitalLetter(c.commit.author.name),
                            message: setCapitalLetter(c.commit.message),
                            creationDate: setDate(c.commit.author.date),
                            creationHour: setHour(c.commit.author.date),
                            hash: getPartOfString(c.sha,1,8)
                       }          
                });
                console.log(updatedCommits);
                dispatch(setCommitsSucces(updatedCommits));
             })
             .catch( error => {
                 dispatch(setCommitsFail(error))
             });
    }
};