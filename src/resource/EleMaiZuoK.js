import React,{Component} from 'react';
import './sass/eleMaiZuoK.scss';
import $ from 'jquery/dist/jquery.js'

export default class EleMaiZuoK extends Component{
    constructor(props){
        super(props);
        this.find1 = this.find1.bind(this);
    }
    find1(){
        var rx = new RegExp();
        rx = /^[0-9]{15}$/;
        var flag = rx.test($(".number").val());
        if($(".number").val() == ""){
            $(".hint").css("display","block");
            $(".hint").html("卡号不能为空");
        }else{
           if(!flag){
               $(".hint").html("该卡号无效");
           }else{
               $(".hint").css("display","none");
           }
        }

    }
    render(){
        return(
            <div className='eleMaiZuoK'>
                <p>
                    <label htmlFor='pwd'>
                        卡号:
                    </label>
                    <input type="text" className='number' placeholder='请输入15位电子卖座卡号'/>
                </p>
                <span className='hint'></span>
                <a href="#" onClick={this.find1}>查询</a>
            </div>
        )
    }
}