import { SET_PROFILE } from '../actionTypes';

const user = {
    user:{},
    profile:{},
    loading: false

};

export default (state =  user, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state,
                 user :action.payload.user,
                 profile:action.payload.profile,
                 loading:false};



        default:
            return user;
    }
}