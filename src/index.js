import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';
import {Provider} from "react-redux";

//第一步
//创建store,第一个参数是reducers，第二个参数是初始值，一般是{}。
//reducers负责处理state数据,要求是一个纯函数
const reducers = combineReducers({
    //state是当前状态，action是当前接收到的数据
    city:function (state=[],action) {
        switch(action.type){
            case "CITY":
                var newState = [...state];
                newState = action.payload;
                return newState;
            default:
                return state;
        }
        return state;
    },
    cityName:function(state="",action){
        switch(action.type){
            case "CITY_NAME" :
                var newState = state;
                newState = action.payload;
                return newState;
            default : return state;
        }
        return state;
    }
})
const store = createStore(reducers,{});

//第二步：谁用给谁数据，将store传递给需要用到数据的组件身上
function render() {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
render();

//第三步，注册回调：当store中的数据产生，更新数据
store.subscribe(render)
registerServiceWorker();
