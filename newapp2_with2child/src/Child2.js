import React,{ Component } from "react";

class Child2 extends Component{

render(){
    return(
        <div>
            <h1>Child2</h1>
            {this.props.value.map((v,i)=><li key={i}>{v}</li>)}
        </div>
    );
}
}

export default Child2;