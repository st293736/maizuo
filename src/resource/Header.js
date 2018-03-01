import React,{Component} from "react";
import "./sass/head.scss";
import "./style/iconfont.css";
import {Link} from 'react-router-dom';

class Header extends  Component {
    constructor(){
        super();
        this.state = {
            showFlag:false
        }
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu(){
        if(this.state.showFlag){
            this.refs.menu.style.display = "block";
        }else {
            this.refs.menu.style.display = "none";
        }
        this.setState({
            showFlag: !this.state.showFlag,
        })
    }
    render(){
        return(
            <div className="boxHead">
                <header>
                    <div className='left'>
                        <a href="#" onClick={this.showMenu} className="iconfont icon-menu"></a>
                        <span className="titleName">卖座电影</span>
                    </div>
                    <div className='right'>
                        <a href="#">北京<span className="iconfont icon-jiantou"></span></a>
                        <Link to='/login' className="iconfont icon-icon-test"></Link>
                    </div>
                </header>
                <div className="menu" ref="menu">
                    <ul>
                        <li><Link to="/home"><span>首页</span><span className="iconfont icon-jiantou"></span></Link></li>
                        <li><Link to='/filmDetail/hitPlaying'><span>影片</span><span className='iconfont icon-jiantou'></span></Link></li>
                        <li><Link to='/cinema'><span>影院</span><span className='iconfont icon-jiantou'></span></Link></li>
                        <li><a href="#"><span>商城</span><span className='iconfont icon-jiantou'></span></a></li>
                        <li><a href="#"><span>我的</span><span className='iconfont icon-jiantou'></span></a></li>
                        <li><Link to='/cart/maizuoka'><span>卖座卡</span><span className='iconfont icon-jiantou'></span></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header;