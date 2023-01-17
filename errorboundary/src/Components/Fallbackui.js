import React, { Component} from 'react'

export default class Fallbackui extends Component {
 render(){ return (
    <div>
      <center>
        Opps Sumthing went wrong.
        404 error.
        <a href="http://localhost:3000/"><button on>back</button></a>
      </center>
    </div>
  )}
}
