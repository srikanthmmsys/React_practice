import React, { Component } from 'react'
import Child1 from './Child1'
 class App extends Component {
sri={name:"srikanth",no:123}

  render() {
    return (
      <div>
        <h1>Parent</h1>
        <Child1 data={this.sri}/>
      </div>
    )
  }
}

export default App;
