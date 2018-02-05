import React from "react";
import {render} from 'react-dom';
//hashRouter主要是#，browserRouter路径后面是/
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import Home from './containers/Home';
import Lesson from "./containers/Lesson";
import Profile from "./containers/Profile";
import App from "./containers/App";
//引入共有样式
import "./common/css/index.less";
import store from './store';
import {Provider} from 'react-redux';

//使用react-router-redux
import {ConnectedRouter} from "react-router-redux";
import createHistory from 'history/createHashHistory';
let history = createHistory();

window.store = store;

//这里应该渲染是的是App组件,外层要增加路由组件
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/lesson" component={Lesson}/>
                    <Route path="/profile" component={Profile}/>
                    <Redirect to="/home"/>
                </Switch>
            </App>
        </ConnectedRouter>
    </Provider>,document.querySelector("#app"));