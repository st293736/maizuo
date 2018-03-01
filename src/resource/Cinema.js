import React,{Component} from 'react';
import './sass/cinema.scss';
import axios from 'axios';

class Cinema extends  Component{
    constructor(props){
        super(props);
        this.state= {
            areas: []
        }
    }
    componentDidMount(){
        axios.get("/v4/api/cinema?__t=1519826360976")
            .then((res)=>{
                // console.log(res.data.data.cinemas);
                var arr = res.data.data.cinemas;
                var arr1 = [];
                for(var i = 0;i < arr.length;i ++){
                   var obj={};
                   obj.add = arr[i].district.name;
                   obj.cinemas = [];
                   arr1.push(obj);
                }
                /*for(var j = 0;j < arr1.length - 1; j++){
                    for(var m = j +1; m < arr1.lenth;m++ ){
                        if(arr1[j].add === arr1[m].add){
                            console.log(j,m);
                        }
                    }
                }*/
                this.setState({
                    areas:arr1
                })
            }).catch((err)=>{
                console.log(err);
        })
    }
    render(){
        return(
            <div className='cinema'>
                <ul>
                    {
                        this.state.areas.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <p>
                                        {item.add}
                                    </p>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}
export default Cinema;