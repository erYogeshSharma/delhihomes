import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './reducers/reducers.js';
import thunk from 'redux-thunk';

const Store = createStore( reducers, {} , compose(applyMiddleware(thunk)));

export default Store;