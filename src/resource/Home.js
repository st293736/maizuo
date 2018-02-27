import React,{Component} from 'react';
import "./sass/home.scss";
import axios from 'axios';
import Carousel from 'antd-mobile/lib/carousel';
import WhiteSpace from 'antd-mobile/lib/white-space';
import WingBlank from 'antd-mobile/lib/wing-blank';
import 'antd-mobile/lib/carousel/style/css';
import 'antd-mobile/lib/white-space/style/css';
import 'antd-mobile/lib/wing-blank/style/css';
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
                console.log(res.data.data);
                this.setState({
                    slider:res.data.data.billboards
                })
            }).catch((err)=> {
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
                    <li>
                        <a href="#">
                            <img src="" alt=""/>
                            <span>
                                <span className="left">

                                </span>
                                <span className="right">

                                </span>
                            </span>
                        </a>
                    </li>
                </ul>
                <div className='MoreButton'>
                    <a href="#">更多热映电影</a>
                </div>
                <div className='line'>
                    <span></span>
                    <span>即将上映</span>
                </div>
                <ul>
                    <li>
                        <a href="#">
                            <img src="" alt=""/>
                            <span>
                                <span className='filmName'>暮光之城</span>
                                <span className='time'>12月31号</span>
                            </span>
                        </a>
                    </li>
                </ul>
                <div className='MoreWill'>
                    <a href="#">更多即将上映电影</a>
                </div>
            </div>
        )
    }
}
export default Home;