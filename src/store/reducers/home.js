import * as TYPE from '../action-types';

let initState = {
    currentLesson:"all",
    sliders:[],  //存放的是轮播图的数据
    lessons:{ //滚动加载的redux中的数据
        hasMore:true, //是否有更多数据
        offset:0,  //每次获取的偏移量
        limit:10,  //每次限制获取多少条
        list:[],    //获取的数据列表
        loading:false  //如果正在加载就不要再去加载数据
    }
};

//sliders 要通过ajax请求数据，通过action请求数据，请求成功后派发到对应的reducer

let home = (state=initState,action)=>{
    switch(action.type){
        case TYPE.SET_CURRENT_LESSON:
            state = {...state,currentLesson:action.lesson};
            break;
        case TYPE.GET_SLIDERS:
            state = {...state,sliders:action.sliders};
            break;
        case TYPE.GET_LESSON:
            state = {...state,lessons:{
                ...state.lessons,
                hasMore:action.hasMore, //更改redux中的状态
                list:[...state.lessons.list,...action.list],
                loading:false,
                offset:state.lessons.offset + action.list.length
            }};
            break;
        case TYPE.CHANGE_LOADING_STATUS:
            state = {...state,lessons:{
                ...state.lessons,
                loading:action.loading
            }}
    }
    return state;
};
export default home;