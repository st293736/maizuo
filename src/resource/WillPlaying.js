import React,{Component} from "react";
import './sass/willPlaying.scss';
import axios from 'axios';
import {Link} from 'react-router-dom'

class WillPlaying extends Component{
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }
    componentDidMount(){
        axios.get("/v4/api/film/coming-soon?page=1&count=7")
            .then((res)=>{
                console.log(res);
                var arr = res.data.data.films;
                for(var i = 0;i < arr.length;i ++){
                    var data = arr[i].premiereAt;
                    var str = (new Date(data).getMonth() + 1) + '月' + new Date(data).getDate() + "日";
                    var week = new Date(data).getDay();
                    switch(week){
                        case 1: week = "一";break;
                        case 2:week = "二";break;
                        case 3:week = "三";break;
                        case 4:week = "四";break;
                        case 5:week = "五";break;
                        case 6:week = "六";break;
                        case 7:week = "日";break;
                        default:return week = 0;
                    }
                    arr[i].scheduleCount = week;
                    arr[i].premiereAt = str;
                }
                this.setState({
                    films:res.data.data.films
                })
            }).catch((err)=>{
                console.log(err);
        })
    }
    render(){
        return(
            <div className='willPlaying'>
                <ul>
                    {
                        this.state.films.map((item,index)=>{
                            return(
                                <li key={item.id}>
                                    <Link to={'/detail/' + item.id} className='filmOne'>
                                        <img src={item.poster.origin} alt={item.name}/>
                                        <i>
                                            <span>
                                                 <span className='filmNm'>{item.name}</span>
                                                 <span className='grade'></span>
                                            </span>
                                            <span>
                                                {item.intro}
                                            </span>
                                            <span>
                                                <span>
                                                    {item.premiereAt}上映
                                                </span>
                                                <span>
                                                    星期{item.scheduleCount}
                                                </span>
                                            </span>
                                        </i>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default WillPlaying;