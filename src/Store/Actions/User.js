import * as actionTypes from './ActionTypes';
import Axios from '../../Hoc/Axios';

export const setUserFail = ( error ) => { return { type : actionTypes.GET_USER_FAIL, error : error }};
export const setUserSucces = ( user ) => { return { type : actionTypes.GET_USER_SUCCESS, user }};

export const getUser = ( user) => {
    return dispatch => {
        const url = `users/${user}`;
        Axios.get(url)
             .then( response => {
                 const updatedUser = {
                     userName: response.data.login,
                     location: response.data.location,
                     email: response.data.email,
                     publicRepos: response.data.public_repos
                 }
                 dispatch(setUserSucces(updatedUser))
             })
             .catch( error => {
                 dispatch(setUserFail(error))
             });
    }
};