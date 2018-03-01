import React,{Component} from "react";
import './sass/login.scss';
import $ from 'jquery/dist/jquery';

class Login extends Component {
    constructor(props){
        super(props);
        this.judge = this.judge.bind(this);
        this.send = this.send.bind(this);
    }
    judge() {
        if ($(".userAccounts").val() == "") {
            $(".userHint").css("display", "block");
            $(".userHint").html("手机号或邮箱不能为空");
        }else{
            var rx = new RegExp();
            rx = /^(1[34578]\d{9}|\w+@[a-z0-9]+(\.[a-z]+){1,3})$/g;
            // rx = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
            var flag = rx.test($(".userAccounts").val());
            if(!flag){
                $(".userHint").css("display","block");
                $(".userHint").html("请输入正确手机号或邮箱");
            }else{
                $(".yanzheng").css("display",'block');
                if($(".userPwd").val() == ""){
                    $(".userHint").css("display", "block");
                    $(".userHint").html("密码不能为空");
                }else{
                    $(".userHint").css("display","none");
                }
            }
        }
    }
    send(){
        var time = 60;
        var timer = setInterval(function(){
             -- time;
            $(".yanzheng").html("重发" + "(" + time + ")");
            if(time <= 0){
                clearInterval(timer);
                $(".yanzheng").html("重发");
            }
        },1000)
    }
    render(){
        return (
            <div className='box-login'>
                <div>
                    <input type="text" className='userAccounts' placeholder='输入手机号码/邮箱'/>
                    <a href="#" className="yanzheng" onClick={this.send}>发送验证码</a>
                    <input type="password" className='userPwd' placeholder='输入密码/验证码'/>
                    <span className='userHint'>aaaa</span>
                    <a href="#" onClick={this.judge}>登录</a>
                </div>
            </div>
        );
    }
}
export default Login;