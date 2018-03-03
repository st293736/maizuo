import React,{Component} from "react";
import './sass/selectCity.scss';
import axios from "axios";
import $ from "jquery/dist/jquery";
import {connect} from "react-redux";

class UI extends Component {
    componentDidMount(){
        this.props.sendCity();
    }
    render(){
        return (
            <div className="selectCity">
                <span>GPS定位你所在的城市</span>
                <ul className="remen city">
                    <li><a href="#">深圳</a></li>
                </ul>
                <span>热门城市</span>
                <ul className="city">
                    <li><a href="#">北京</a></li>
                    <li><a href="#">上海</a></li>
                    <li><a href="#">广州</a></li>
                    <li><a href="#">深圳</a></li>
                </ul>
                <span>按字母排序</span>
                <ul>
                    {
                        this.props.first.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <a href={"#" + item.one}>{item.one}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    this.props.first.map((item,index)=>{
                        return(
                            <div id={item.one} key={index}>
                                <span>{item.one}</span>
                                <ul className='city'>
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
        )
    }
}
const mapStateToProps = function(state,props){
    return {
        first:state.city,
    }
}
const mapDispatchToProps = function (dispatch,props) {
    return {
        sendCity:function () {
            var first =[];
            var cityes = [];
            axios.get("/v4/api/city?__t=1519977579938")
                .then((res)=>{
                    var arr = res.data.data.cities;
                    for(var i = 0;i < arr.length;i ++){
                        first.push(arr[i].pinyin.charAt(0));
                    }
                    var liter = Array.from(new Set(first));
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
                        cityes.push(obj);
                    }
                    dispatch({
                        type:"CITY",
                        payload:
                            cityes

                    })
                }).catch((err)=>{
                console.log(err);
            })
            setTimeout(function () {
                $(".city li").each(function (item,index) {
                    $(this).click(function (item,index) {
                        var name = $(this).children("a").html();
                        dispatch({
                            type:"CITY_NAME",
                            payload:name
                        })
                    })
                })
            },1000)
        }
    }
}
const SelectCity = connect(mapStateToProps,mapDispatchToProps)(UI);
export default SelectCity;