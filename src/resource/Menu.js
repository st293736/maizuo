import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import './sass/menu.scss'
import HitPlaying from "./HitPlaying";
import WillPlaying from './WillPlaying';

class Menu extends Component {
    componentDidMount(){

    }
    render(){
        return(
            <div className='filmMenu'>
                <div>
                    <NavLink activeStyle={{
                        color:'#fe6e00'
                    }} activeClassName='selected' to='/filmDetail/hitPlaying'>正在热映</NavLink>
                    <NavLink activeStyle={{
                        color:'#fe6e00'
                    }} activeClassName='selected' to='/filmDetail/willPlaying'>即将上映</NavLink>


                </div>
                <Route path='/filmDetail/hitPlaying' component={HitPlaying}/>
                <Route path='/filmDetail/willPlaying' component={WillPlaying}/>
            </div>
        )
    }
}
export default Menu;