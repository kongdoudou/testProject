//首页的动作
// 放一些action-creator 函数返回action
import * as TYPE from '../action-types';
import {getSliders,getLessons} from '../../api/home';

export const setCurrentLesson = (lesson)=>{
    return {
        type:TYPE.SET_CURRENT_LESSON,
        lesson
    }
};

//普通的action都是返回的对象，redux-thunk支持异步，将dispatch的权限转交给自己
export const getSlider = ()=> (dispatch,getState)=>{
    // dispatch可以派发action
    // getState可以获取redux中的状态
    getSliders().then(data=>{
        dispatch({
            type:TYPE.GET_SLIDERS,
            sliders:data
        })
    });
};

//获取课程
export const getLesson = ()=>(dispatch,getState)=>{
    //要调用ajax请求，请求的时候需要type limit offset
    let {currentLesson,
        lessons:{
            hasMore,
            offset,
            limit
        }
    } = getState().home;
    if(!hasMore) return;
    dispatch({
        type:TYPE.CHANGE_LOADING_STATUS,
        loading:true
    });
    getLessons(currentLesson,limit,offset).then(data=>{
        dispatch({
            type:TYPE.GET_LESSON,
            ...data
            /*
            * hasMore:data.hasMore,
            * lessons:data.lessons
            */
        })
    })
}