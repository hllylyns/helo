import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import routes from '../src/routes';



class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    // console.log(this.props.location)
    // let {pathname} = this.props.location;
    return (
      <div className="App">
      <h1>Helo</h1>
      {
                this.props.path === '/' ?
                <div>{routes}</div>
                :
                <div> 
                {routes}
                <Nav/>
                </div>
            }
      </div>
    )
  }
}

export default App;
