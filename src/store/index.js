import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

//引入路由中间件
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
let history = createHistory();
//middleWare:函数型的数组
let middleWare = [thunk,routerMiddleware(history)];

export default createStore(reducer,applyMiddleware(...middleWare));