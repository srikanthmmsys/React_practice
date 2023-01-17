import React,{Component} from "react";
export default class Child extends Component{

componentWillUnmount(){
    console.log("unmount");
}

render(){
    return(
        <div>
            <center>
                child component
            </center>
        </div>
    )
}

}