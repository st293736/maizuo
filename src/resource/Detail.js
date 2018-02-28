import React,{Component} from "react";
import './sass/detail.scss';
import axios from 'axios';

class Detail extends Component{
    constructor(){
        super();
        this.state={
            arr:[]
        }
    }
    componentDidMount(){
        axios.get(`/v4/api/film/${this.props.match.params.fid}?__t=1519717677795`)
        .then((res)=>{
            // console.log(res);
            this.state.arr.push(res.data.data.film);
            var data = new Date(res.data.data.film.premiereAt);
            res.data.data.film.premiereAt = (data.getMonth()+1)+"月" + data.getDay() + "日";
            var str='';
            for(var i = 0;i < res.data.data.film.actors.length;i ++){
                str =str + res.data.data.film.actors[i].name + " | ";
            }
            res.data.data.film.actors = str;
            this.setState({
                arr:this.state.arr
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div className='box'>
                {
                    this.state.arr.map((item,index)=>{
                        return (
                            <div key={item.id}>
                                <div className='img'>
                                    <img src={item.cover.origin} alt={item.name}/>
                                </div>
                                <p>
                                    <span></span>
                                    <span className='filmName'>影片简介</span>
                                </p>
                                <p>
                                    <span className='author'>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演&nbsp;:</span>
                                    <span className='authorName'>{item.director}</span>
                                </p>
                                <p>
                                    <span className='author'>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演&nbsp;:</span>
                                    <span className='authorName'>{item.actors}</span>
                                </p>
                                <p>
                                    <span className='author'>地区语言:</span>
                                    <span className='authorName'>{item.language}</span>
                                </p>
                                <p>
                                    <span className='author'>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型&nbsp;:</span>
                                    <span className='authorName'>{item.category}</span>
                                </p>
                                <p>
                                    <span className='author'>上映日期:</span>
                                    <span className='authorName'>{item.premiereAt}上映</span>
                                </p>
                                <p className='explaine'>
                                    {item.synopsis}
                                </p>
                                <div className='btn'>
                                    <a href="#">立即购票</a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
export default Detail;