import * as actionTypes from './ActionTypes';
import Axios from '../../Hoc/Axios';

export const getCommitsStart = () => { return { type : actionTypes.GET_COMMITS_START } };
export const getCommitsFail = ( error ) => { return { type : actionTypes.GET_COMMITS_FAIL, error : error } };
export const getCommitsSucces = ( commits ) => { return { type : actionTypes.GET_COMMITS_SUCCESS, commits } };

export const getCommits = ( user, repository ) => {
    return dispatch => {
        dispatch(getCommitsStart());
        const url = `repos/${user}/${repository}/commits`;
        Axios.get(url)
             .then( response => {
                 console.log(response.data);
             })
             .catch( error => {
                 console.log(error);
             })
    }
};