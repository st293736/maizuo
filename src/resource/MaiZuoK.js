import React,{Component} from 'react';
import './sass/maizuok.scss';
import $ from 'jquery/dist/jquery.js';

export default class MaiZuoK extends Component{
    constructor(props){
        super(props);
        this.find = this.find.bind(this);
    }
    find(){
        if(($('.userCart').val() == "" && $(".pwd").val() != "") || ($(".userCart").val() == "" && $('.pwd').val() == "")){
            $(".txt").css("display","block");
            $(".txt").html("卡号不能为空");
        }else if($(".userCart").val() != "" && $(".pwd").val() == ""){
            $(".txt").css("display","block");
            $('.txt').html("密码不能为空");
        }else{
            $(".txt").css("display","none");
        }
    }
    render(){
        return(
            <div className='maizuok'>
                <p>
                    <label htmlFor='name'>
                        卡号:
                    </label>
                    <input type="text" className='userCart' placeholder='请输入卡号'/>
                </p>
                <p>
                    <label htmlFor='pwd'>
                        密码:
                    </label>
                    <input type="password" className='pwd' placeholder='请输入密码'/>
                </p>
                <span className='txt'></span>
                <a href="#" onClick={this.find}>查询</a>
            </div>
        )
    }
}