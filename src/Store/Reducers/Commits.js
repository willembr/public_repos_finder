import * as actionTypes from '../Actions/ActionTypes';
import { updateObject } from '../Utility';


const initialState = {
    commits:null,
    loading:false,
    error:false
}

const setReposSuccess = (state, action) => {
    const updatedRepos = action.commits.map( commit => {
                            return commit
    });
    const updateState = {
        commits:updatedRepos,
        loading:false,
        error:false
    };
    return updateObject(state,updateState);
};

const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case actionTypes.GET_COMMITS_START: return { ...state, loading:true, error:false};
        case actionTypes.GET_COMMITS_SUCCESS: return setReposSuccess(state, action);
        case actionTypes.GET_COMMITS_FAIL: return { ...state, loading:false, error:false};
        default: return state;
    };
};

export default reducer;