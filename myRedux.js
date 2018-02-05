let createStore = (reducer)=>{
    let state;  //存放store的状态
    let listeners = [];  //存放订阅的函数
    //getState:获取当前store中的状态
    let getState = ()=>{
        return state;
    };
    //dispatch：发送命令，传入的参数为action，action为一个对象，而且必须有一个的参数名为type
    let dispatch = (action)=>{
        let newState = reducer(state,action);
        listeners.forEach(listen=>listen());
    };
    //subscribe:订阅,传入一个函数
    let subscribe = (listener)=>{
        listeners.push(listener);
        return ()=>{
            listeners = listeners.filter(l=>l!=listener);
        }
    };
    //为了能够有一个初始状态，可以先执行一次dispatch,触发reducer执行一次，给state赋初始值
    dispatch();
    return {
        getState,
        dispatch,
        subscribe
    }
}