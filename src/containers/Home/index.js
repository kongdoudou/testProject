import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import LessonList from "../../components/LessonList";
import {connect} from 'react-redux';
import * as actions from '../../store/actions/home';
import Slider from "../../components/Slider";
import ScrollList from "../../components/ScrollList/index";


// @connect((state)=>({}),(dispatch)=>{
//     return {
//         setCurrentLesson:(lesson)=>{
//             dispatch(actions.setCurrentLesson(lesson))
//         }
//     }
// })

//引入的第二种写法
/*import {bindActionCreators} from "redux";
@connect((state)=>({}),dispatch=>{
    return bindActionCreators(actions,dispatch);
})*/

@connect((state)=>({
    sliders:state.home.sliders, //将轮播图中的数据映射到sliders上
    lists:state.home.lessons
}),{...actions})

export default class Home extends Component{
    choose = (val)=>{
        //console.log(val);  //想要改变redux中的值，就要发布redux
        //当我们直接调用属性中的setCurrentLesson方法，会自动dispatch
        this.props.setCurrentLesson(val);
    };
    componentWillMount(){
        this.props.getSlider();
        this.props.getLesson();
    }
    getMore = ()=>{
        this.props.getLesson();
    };
    render(){
        let {loading,hasMore} = this.props.lists;
        return (
            <div>
                {/*子组件和父组件通信，父组件传递回调函数给子组件，子组件触发这个函数*/}
                <HomeHeader choose={this.choose}/>
                <div className="page-wrap" ref='scroll'>
                    <Slider sliders={this.props.sliders}/>
                    {/*ScrollList需要传递以下几个参数
                        1、param1:element 哪个组件需要绑定scroll事件
                        2、param2:loading 是否正在加载
                        3、param3:hasMore 是否还有更多
                        4、param4：loadMore 加载更多
                    */}
                    <ScrollList element={this.refs.scroll}
                                loading={loading}
                                hasMore={hasMore}
                                loadMore={this.getMore}>
                        <LessonList lists={this.props.lists.list}/>
                    </ScrollList>
                    {/*<button onClick={this.getMore}>获取更多</button>*/}
                </div>
            </div>
        )
    }
}