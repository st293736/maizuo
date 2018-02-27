import React,{Component} from "react";
import './sass/login.scss'

class Login extends Component {
    render(){
        return (
            <div className='box'>
                <input type="text" className='userAccounts' placeholder='输入手机号码/邮箱'/>
                <input type="password" className='userPwd' placeholder='输入密码/验证码'/>
                <a href="#">登录</a>
            </div>
        );
    }
}
export default Login;