import * as actionType from '../actionTypes.js';
import isEmpty  from '../../validator/isEmpty';
import jwt_decode from 'jwt-decode';

const initialState = {
    isAuthenticated: false,
    user:{}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload}));
            return{
              ...state, isAuthenticated:!isEmpty(action.payload),
              user: action.payload
            };
        case actionType.LOGOUT:
            
            localStorage.clear();
            return { isAuthenticated:false,

            user:{} 
         };
         
        
        
            
        
            
            
    
        default:
            return state;
    }
};

export default authReducer;