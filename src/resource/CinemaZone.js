import React,{Component} from "react";
import './sass/cinemaZone.scss';
import axios from "axios";
import './style/iconfont.css';
import $ from "jquery/dist/jquery.js";

export default class CinemaZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area: [],
            cinema: []
        };
    }

    componentDidMount() {
        axios.get("/v4/api/cinema?__t=1519903061166").then((res) => {
            // console.log(res.data.data.cinemas);
            var arr = res.data.data.cinemas;
            var arr1 = [];
            for(var j = 0;j < arr.length;j ++){
                arr1.push(arr[j].district.name);
            }
            arr1 = Array.from(new Set(arr1));
            for(var n = 0;n < arr1.length;n ++){
                var obj = {};
                obj.add = arr1[n];
                obj.cinemas = [];
                for(var m = 0;m < arr.length; m ++){
                    if(obj.add == arr[m].district.name){
                        obj.cinemas.push(arr[m]);
                    }
                }
                this.state.area.push(obj);
                this.state.cinema.push(obj.cinemas);
            }
            this.setState({
                area:this.state.area,
                cinema:this.state.cinema
            })
        }).catch((err) => {
            console.log(err);
        })
        setTimeout(function(){
            $(".cinemaSpan").each(function (index,item) {
                $(this).click(function () {
                    if(!($(this).siblings(".cinema").hasClass("active"))){
                        // console.log($(this).siblings());
                        $(this).siblings(".cinema").addClass("active");
                    }else{
                        $(this).siblings(".cinema").removeClass("active");
                    }

                })
            })
        },1000)
    }

    render() {
        return (
            <div className='cinemaZone'>
                <ul>
                    {
                        this.state.area.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <span className="cinemaSpan" >{item.add}</span>
                                    {
                                        this.state.cinema[index].map((item,index)=>{
                                            return (
                                                <div key={item.id} className='cinema'>
                                                    <p>
                                                        <span className="cinemaNm">{item.name}</span>
                                                        <span className='iconfont icon-jiantou'></span>
                                                    </p>
                                                    <span className='address'>{item.address}</span>
                                                    <span className="distance">未知距离</span>
                                                </div>
                                            )
                                        })
                                    }

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
};