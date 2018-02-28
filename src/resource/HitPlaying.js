import React,{Component} from 'react';
import './sass/hitPlaying.scss'
import axios from 'axios';
import {Link} from 'react-router-dom';

class HitPlaying extends Component{
    constructor(props){
        super(props);
        this.state={
            film:[]
        }
    }
    componentDidMount(){
        axios.get("/v4/api/film/now-playing?page=1&count=7")
            .then((res)=>{
                console.log(res);
                this.setState({
                    film:res.data.data.films
                })
            }).catch((err)=>{
                console.log(err);
        })
    }
    render(){
        return(
            <div className='hitPlaying'>
                <ul>
                    {
                        this.state.film.map((item,index)=>{
                            return(
                                <li key={item.id}>
                                    <Link to={'/detail/' + item.id} className='filmOne'>
                                        <img src={item.poster.origin} alt={item.name}/>
                                        <i>
                                            <span>
                                                 <span className='filmNm'>{item.name}</span>
                                                 <span className='grade'>{item.grade}</span>
                                            </span>
                                            <span>
                                                {item.intro}
                                            </span>
                                            <span>
                                                <span>
                                                    <span className='number'>{item.cinemaCount}</span>
                                                    家影院上映
                                                 </span>
                                                <span>
                                                    <span className="customerNum">{item.watchCount}</span>
                                                    人购票
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
export default HitPlaying;