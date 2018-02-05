import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less';

export default class Tab extends Component{
    render(){
        let path = this.props.path;
        let setCurrentLesson = this.props.set;
        return (
            <nav className="tab">
                <Link to="/home" className={path==="/home"?"active":""}>
                    <i className="iconfont icon-xingqiu"></i>
                    <span>首页</span>
                </Link>
                <Link to="/lesson"className={path==="/lesson"?"active":""}>
                    <i className="iconfont icon-react"></i>
                    <span>我的课程</span>
                </Link>
                <Link to="/profile"className={path==="/profile"?"active":""}>
                    <i className="iconfont icon-xiaolian"></i>
                    <span>个人中心</span>
                </Link>
            </nav>
        )
    }
}