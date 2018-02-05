import React, {Component} from 'react';

export default class ScrollList extends Component {
    constructor(){
        super();
        this.state = {
            isBindEvent:false
        }
    }
    bindScroll = () => {
        //节流，浏览器18ms刷新一次页面
        let {element, hasMore, loading, loadMore} = this.props;
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            if ((element.scrollTop + element.offsetHeight + 20 > element.scrollHeight)&&!loading&&hasMore) {
                loadMore();
            }
        },20);
    };

    componentWillReceiveProps(nextProps) {
        //
        //当父组件DOM已经生成后，子组件可以接收到新的属性，就可以给element绑定事件了
        if(nextProps.element&&!this.state.isBindEvent){
            nextProps.element.addEventListener("scroll", this.bindScroll, false);
            this.setState({
                isBindEvent:true
            });
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}