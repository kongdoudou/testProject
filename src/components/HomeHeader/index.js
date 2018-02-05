import React,{Component} from 'react';
import './index.less';
import logoImg from '../../common/images/logo.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class HomeHeader extends Component{
    constructor(){
        super();
        this.state = {
            isShow:false
        };
    }
    changeShow = ()=>{
        this.setState({
            isShow:!this.state.isShow
        })
    };
    choose = (e)=>{
        //调用父组件的函数并且关闭下拉菜单
        this.props.choose(e.target.innerText);
        this.changeShow();
    };
    render(){
        let {isShow} = this.state;
        return (
            <div className="home-header">
                <div className="header-bar">
                    <img src={logoImg} alt=""/>
                    <div onClick={this.changeShow}>
                        {
                            isShow? <i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-uilist"></i>
                        }
                    </div>
                </div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {
                        isShow?<ul className="header-menu" onClick={this.choose}>
                            <li>Node</li>
                            <li>html</li>
                            <li>视频</li>
                            <li>文档</li>
                        </ul>:null
                    }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}