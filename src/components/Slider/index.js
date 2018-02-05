import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import "./index.less";

export default class Slider extends Component{
    constructor(){
        super();
        this.state = {
            index:0
        }
    }
    render(){
        let sliders = this.props.sliders;
        let opts = {continuous: true,callback:(index,item)=>{
            this.setState({
                index
            })
        }};
        return (
            <div className="slider">
                {
                   this.props.sliders.length>0?<ReactSwipe className="carousel" swipeOptions={opts}>
                       {
                           this.props.sliders.map((item,index)=>(
                                <div key={index}>
                                    <img src={item} alt=""/>
                                </div>
                           ))
                       }
                   </ReactSwipe>:"加载中"
                }
                <div className="dots">
                    {
                        this.props.sliders.length>0?(this.props.sliders.map((item,index)=>{
                            return <span key={index} className={this.state.index===index?"active":""}></span>
                        })):null
                    }
                </div>
            </div>
        )
    }
}