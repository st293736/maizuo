import React, { Component } from 'react';
import Header from "./resource/Header.js";
import Home from "./resource/Home.js";
import "./App.scss";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Detail from './resource/Detail.js';
import Login from './resource/Login.js';
import FilmDetail from './resource/FilmDetail.js';
import Cinema from './resource/Cinema';
import Cart from './resource/Cart';
import CinemaZone from './resource/CinemaZone';
import SelectCity from './resource/SelectCity';


class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
              <Header/>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/detail/:fid' component={Detail}/>
                <Route path='/login' component={Login}/>
                <Route path='/filmDetail' component={FilmDetail}/>
                <Route path='/cinema' component={Cinema}/>
                <Route path='/cart' component={Cart}/>
                <Route path='/cinemaZone' component={CinemaZone}/>
                <Route path='/selectCity' component={SelectCity}/>
            </div>
        </Router>
    );
  }
}

export default App;
