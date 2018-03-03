import React,{Component} from "react";
import {connect} from "react-redux";

class UI extends Component{
    render(){
        return(
            <div>
                <p onClick={this.props.send}>发送数据</p>
                <p>
                    接收回来的数据
                    {
                        this.props.cities
                    }
                </p>

            </div>
        )
    }
}

//数据映射给组件
//return 返回的是一个对象

//调用时：this.props.对象中的key
const mapStateToProps = (state,props)=> {
    return {
        cities:state.city
    }
}
//方法映射给组件
//return 返回的是一个对象

//调用时：this.props.对象中的key
const mapDispatchToprops = (dispatch,props)=> {
    return {
        send: function () {
            dispatch({
                type: "EXAMPLE",
                payload: "这是更精确的发送数据"
            })
        }
    }
}
const Example = connect(mapStateToProps,mapDispatchToprops)(UI);
export default Example;