import React, { Component } from 'react'
import Child2 from './Child2'
export default class Child1 extends Component {
  
   a =[this.props.data.name,this.props.data.no];
    render() {
    return (
      <div>
        <h1>Child1</h1>
        <Child2 value={this.a}/>
      </div>
    )
  }
}
