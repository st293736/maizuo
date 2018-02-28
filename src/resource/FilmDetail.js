import React,{Component} from 'react';
import './sass/filmDetail.scss';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Menu from './Menu';

class FilmDetail extends Component{
    render(){
        return(
            <div className='FilmDetail'>
                <Menu/>
            </div>
        )
    }
}
export default FilmDetail;
