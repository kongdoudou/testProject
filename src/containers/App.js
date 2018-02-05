import React,{Component} from 'react';
import Tab from "../components/Tab/index";
import {connect} from 'react-redux';
import * as TYPE from '../store/action-types';
import {setCurrentLesson} from '../store/actions/home';

//我们要传入一个函数给homeHeader,当点击某个列表时，拿到数据
@connect((state)=>({
    router:state.router
}))

export default class App extends Component{
    render(){
        return (
            <div className="wrap">
                {this.props.children}
                <Tab path={this.props.router.location.pathname}/>
            </div>
        )
    }
}