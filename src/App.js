import React, { Component } from 'react';
import Header from "./resource/Header.js";
import Home from "./resource/Home.js";
import "./App.scss";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Detail from './resource/Detail.js';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
              <Header/>
                <Link to="/home"></Link>
                <Route exact path='/' component={Home}/>
                <Route path='/detail/:fid' component={Detail}/>
            </div>
        </Router>
    );
  }
}

export default App;
