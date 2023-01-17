import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super();
this.state={data:1}
  }
changeData(){
  if(this.state.data<10){
this.setState({data:this.state.data+1});
  }
  else{
    this.setState({data:1})
  }
}

  render() {
    return (
      <div className='App'>
        <h1>{this.state.data}</h1>
        <button onClick={()=>{this.changeData() }}>click</button>
      </div>
    )
  }
}
