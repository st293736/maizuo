import React,{Component} from 'react';
import "./sass/home.scss";
import axios from 'axios';
import Carousel from 'antd-mobile/lib/carousel';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import 'antd-mobile/lib/carousel/style/css';
import 'antd-mobile/lib/white-space/style/css';
import 'antd-mobile/lib/wing-blank/style/css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';



class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider:[],
            playing:[],
            willPlay:[]

        }
    }

    componentDidMount(){
        axios.get('/v4/api/billboard/home?__t=1519650036211')
            .then((res)=> {
                console.log(res.data.data.billboards);
                this.setState({
                    slider:res.data.data.billboards
                })
            }).catch((err)=> {
               console.log(err);
            })
        axios.get('/v4/api/film/now-playing?__t=1519695361728&page=1&count=5')
            .then((res)=>{
                // console.log(res);
                this.setState({
                    playing:res.data.data.films
                })
            }).catch((err)=>{
                console.log(err);
        })
        axios.get('/v4/api/film/coming-soon?__t=1519695361734&page=1&count=3')
            .then((res)=>{
                console.log(res.data.data.films);
                var time= "";
                for(var i = 0;i < res.data.data.films.length;i ++){
                    var data = new Date(res.data.data.films[i].premiereAt);
                    var month = data.getMonth() + 1;
                    var day = data.getDay();
                    time = month + " 月 " + day + " 日 ";
                    res.data.data.films[i].premiereAt = time;
                    console.log(res.data.data.films[i]);
                    this.setState({
                        willPlay:res.data.data.films
                    })
                }

            }).catch((err)=>{
                console.log(err);
        })
    }
    render(){
        return(
            <div className="box">
                <div className="slider">
                    <div className='slider-con'>
                        <Carousel
                            autoplay={true}
                            infinite
                            selectedIndex={1}
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                        >
                            {this.state.slider.map(val => (
                                <img
                                    src={val.imageUrl}
                                    key={val.id}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>

                <ul>
                    {
                        this.state.playing.map((item,index)=>{
                            return (
                                    <li key={item.id}>
                                         <Link to={'/detail/'+item.id} >
                                             <img src={item.cover.origin} alt={item.name}/>
                                             <span>
                                                 <span className="leftone">
                                                    <span className='viewName'>{item.name}</span>
                                                    <span className='viewNum'>{item.cinemaCount}家影院上映{item.watchCount}人购票</span>
                                                 </span>
                                                 <span className="rightone">
                                                     {item.grade}
                                                     </span>
                                             </span>
                                        </Link>
                                    </li>
                            )
                        })
                    }

                </ul>

                <div className='MoreButton'>
                    <a href="#">更多热映电影</a>
                </div>
                <div className='line'>
                    <span></span>
                    <span>即将上映</span>
                </div>
                <ul>
                    {
                        this.state.willPlay.map((item,index)=>{
                            return(
                                <li key={item.id}>
                                    <Link to={'/detail/'+item.id}  >
                                        <img src={item.cover.origin} alt={item.name}/>
                                        <span>
                                            <span className='filmName'>{item.name}</span>

                                            <span className='time'>{item.premiereAt}</span>
                                        </span>
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>
                <div className='MoreWill'>
                    <a href="#">更多即将上映电影</a>
                </div>

            </div>

        )
    }
}
export default Home;