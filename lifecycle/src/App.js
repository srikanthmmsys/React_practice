import {Component} from 'react';
import './App.css';
import Child from './Child';
export default class App extends Component {
constructor(){
  super();
this.state={
  count:0
  ,flag:true
}
}
onclickHandeller(){
if(this.state.count > 10){
  this.setState({flag:false})
  this.setState({count:this.state.count+1});
}
else{
  this.setState({count:this.state.count+1});
}
}
  componentDidMount(){
    console.log("didmount");
  }

componentDidUpdate(){
  console.log("didupdate")
}
render(){

  
  return(<>
  <center>
  {this.state.count}
  
<button onClick={()=>{
  this.onclickHandeller()
}}>Button</button>
{this.state.flag?<Child/>:""}
</center>
  </>);
}

}