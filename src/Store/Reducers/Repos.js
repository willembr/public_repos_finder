import * as actionTypes from '../Actions/ActionTypes';
import { updateObject } from '../Utility';


const initialState = {
    repos:null,
    loading:false,
    error:false
}

const setReposSuccess = (state, action) => {
    const updatedRepos = action.repos.map( repo => {
                            return repo
    });
    const updateState = {
        repos:updatedRepos,
        loading:false,
        error:false
    };
    return updateObject(state,updateState);
};

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case actionTypes.GET_REPOS_START: return { ...state, loading:true, error:false};
        case actionTypes.GET_REPOS_SUCCESS: return setReposSuccess(state, action);
        case actionTypes.GET_REPOS_FAIL: return { ...state, loading:false, error:false};
        default: return state;
    };
};

export default reducer;