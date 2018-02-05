import React,{Component} from 'react';
import "./index.less";

export default class LessonList extends Component{
    render(){
        return (
            <ul className="lesson-list">
                {
                    this.props.lists.length>0?(
                        this.props.lists.map((item,index)=>{
                            let {url,title,price} = item;
                            return (
                            <li key={index}>
                                <img src={url} alt=""/>
                                <p>{title}</p>
                                <span>{price}</span>
                            </li>
                            )
                        })
                    ):'正在加载中……'
                }
            </ul>
        )
    }
}