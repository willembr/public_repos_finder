import * as actionTypes from '../Actions/ActionTypes';
import { updateObject } from '../Utility';

const initialState = {
    user:null,
    error:false
}

 const setUserSuccess = (state, action) => {
     return updateObject(state, { user : action.user, error:false });
 };



const reducer = ( state = initialState, action ) => {
    switch(action.type){
        case actionTypes.GET_USER_SUCCESS: return setUserSuccess(state, action);
        case actionTypes.GET_USER_FAIL: return { ...state, error: true};
        default: return state;
    };
};

export default reducer;