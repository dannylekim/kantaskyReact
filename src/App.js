import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  render() {

    let token;
    axios.post('http://localhost:4000/signup',{
      email: 'admin@mail.ca',
      username: 'admin2',
      firstName: "d",
      lastName: "N",
      password: "Abc123.",
      role: "user"
  }).then(function(data){
      console.log(data)
    }).catch(function (error){
      console.log(error)
    })
   

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        {token}
        
        </p>
      </div>
    );
  }
}

export default App;
