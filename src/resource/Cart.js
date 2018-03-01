import React,{Component} from "react";
import './sass/cart.scss';
import {BroswerRouter as Router,Route,NavLink} from 'react-router-dom'
import MaiZuoK from './MaiZuoK';
import EleMaiZuoK from './EleMaiZuoK';
class Cart extends Component{
    render(){
        return(
            <div className='cart'>
                <p>
                    <NavLink activeClassName='selected' activeStyle={{
                        color:'#ff7100'
                    }} to='/cart/maizuoka' className='seat'>卖座卡</NavLink>
                    <NavLink activeClassName='selected' activeStyle={{
                        color:'#ff7100'
                    }}  to='/cart/elemaizuoka' className='seat'>电子卖座卡</NavLink>
                </p>
                <Route path='/cart/maizuoka' component={MaiZuoK} />
                <Route path='/cart/elemaizuoka' component={EleMaiZuoK}/>
            </div>
        )
    }
}
export default Cart;