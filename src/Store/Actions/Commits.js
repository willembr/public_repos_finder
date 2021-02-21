import * as actionTypes from './ActionTypes';
import Axios from '../../Hoc/Axios';
import { setCapitalLetter, setDate, setHour, getPartOfString } from '../../Functions/Output';

export const setCommitsStart = () => { return { type : actionTypes.GET_COMMITS_START } };
export const setCommitsFail = ( error ) => { return { type : actionTypes.GET_COMMITS_FAIL, error : error } };
export const setCommitsSucces = ( commits ) => { return { type : actionTypes.GET_COMMITS_SUCCESS, commits } };

export const getCommits = ( user, repository ) => {
    return dispatch => {
        dispatch(setCommitsStart());
        const url = `repos/${user}/${repository}/commits`;
        Axios.get(url)
             .then( response => {
                const updatedCommits = response.data.map(
                       c => {
                       return {
                            hash: getPartOfString(c.sha,1,8),
                            message: setCapitalLetter(c.commit.message),
                            date: setDate(c.commit.author.date),
                            hour: setHour(c.commit.author.date)       
                       }          
                });
                dispatch(setCommitsSucces(updatedCommits));
             })
             .catch( error => {
                 dispatch(setCommitsFail(error))
             });
    }
};