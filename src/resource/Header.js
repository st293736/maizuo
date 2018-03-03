import React,{Component} from "react";
import "./sass/head.scss";
import "./style/iconfont.css";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import $ from "jquery/dist/jquery";

class UI extends Component{

    render(){
        var nm = this.props.name;
        return(
            <div className="boxHead">
                <header>
                    <div className='left'>
                        <a onClick={this.props.showMenu} className="iconfont icon-menu"></a>
                        <span className="titleName">卖座电影</span>
                    </div>
                    <div className='right'>
                        <Link to='/selectCity'><span className='city'>北京</span>
                       <span className="iconfont icon-jiantou"></span></Link>
                        <Link to='/login' className="iconfont icon-icon-test"></Link>
                    </div>
                </header>
                <div className="menu" ref="menu">
                    <ul>
                        <li><Link to="/home"><span>首页</span><span className="iconfont icon-jiantou"></span></Link></li>
                        <li><Link to='/filmDetail/hitPlaying'><span>影片</span><span className='iconfont icon-jiantou'></span></Link></li>
                        <li><Link to='/cinemaZone'><span>影院</span><span className='iconfont icon-jiantou'></span></Link></li>
                        <li><a href=""><span>商城</span><span className='iconfont icon-jiantou'></span></a></li>
                        <li><a href=""><span>我的</span><span className='iconfont icon-jiantou'></span></a></li>
                        <li><Link to='/cart/maizuoka'><span>卖座卡</span><span className='iconfont icon-jiantou'></span></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = function (state,props) {
    // console.log(state.cityName);
    return {
        name:state.cityName
    }
}
const mapDispatchToProps = function(dispatch,props){
    return {
        showMenu:function () {
            var showFlag = false;
            showFlag = !showFlag;
            if(this.state.showFlag){
                this.refs.menu.style.display = "block";
            }else {
                this.refs.menu.style.display = "none";
            }
        }
    }
}
const Header = connect(mapStateToProps,mapDispatchToProps)(UI);

export default Header;