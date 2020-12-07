import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const initialSatte ={};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialSatte,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;