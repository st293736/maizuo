import React,{Component} from "react";
import './sass/selectCity.scss';
import axios from "axios";

export default class SelectCity extends Component{
    constructor(props) {
        super(props);
        this.state={
            first:[],
            cityes:[]
        }
    }

    componentDidMount(){
        axios.get("/v4/api/city?__t=1519977579938")
            .then((res)=>{
                var arr = res.data.data.cities;
                for(var i = 0;i < arr.length;i ++){
                    this.state.first.push(arr[i].pinyin.charAt(0));
                }
                var liter = Array.from(new Set(this.state.first));
                for(var a = 0;a < liter.length;a ++){
                    liter[a] = liter[a].charCodeAt();
                }
                liter.sort(function (a,b) {
                    return a-b;
                })
                for(var c = 0;c < liter.length;c ++){
                    liter[c] = String.fromCharCode(liter[c]);
                }
                // console.log(liter);

                for(var i = 0;i < liter.length;i ++){
                    var obj = {};
                    obj.one = liter[i];
                    obj.city=[];
                    for(var j = 0;j < arr.length; j ++){
                        if(liter[i] == arr[j].pinyin.charAt(0)){
                            obj.city.push(arr[j].name);
                        }
                    }
                    this.state.cityes.push(obj);
                }
                this.setState({
                    first:liter
                })
            }).catch((err)=>{
                console.log(err);
        })
    }
    render(){
        return (
            <div className="selectCity">
                <span>GPS定位你所在的城市</span>
                <ul className="remen">
                    <li><a href="#">深圳</a></li>
                </ul>
                <span>热门城市</span>
                <ul>
                    <li><a href="#">北京</a></li>
                    <li><a href="#">上海</a></li>
                    <li><a href="#">广州</a></li>
                    <li><a href="#">深圳</a></li>
                </ul>
                <span>按字母排序</span>
                <ul>
                    {
                        this.state.first.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <a href={"#" + item}>{item}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    this.state.cityes.map((item,index)=>{
                        return(
                            <div id={item.one} key={index}>
                                <span>{item.one}</span>
                                <ul>
                                    {
                                        item.city.map((item,index)=>{
                                            return (
                                                <li key={index}>
                                                    <a href="#">
                                                        {item}
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}