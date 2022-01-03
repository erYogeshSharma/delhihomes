import {combineReducers} from 'redux';
import auth from './auth';
import errorReducer from './errorReducers';
import messageReducer from './messageReducers';
import profileReducer from './profileReducers';

export const reducers = combineReducers({
    auth,
    message: messageReducer,
    errors: errorReducer,
    userProfile: profileReducer
});