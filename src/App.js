import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'


import StockApp from './containers/StockApp/StockApp';
//import axios from 'axios'
class App extends Component {
  /* state = {
    userData: {
      isLoggedIn: false,
      error: false,
      token: null
    }
    
  } */

  /* handleSubmit = (event) => {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;

    axios.post('/login', {
        username: username,
        password: password
    }).then(response => {
        console.log(response);
        this.setState({userData: {
          isLoggedIn: true,
          token: response.data.token}})
    }).catch(error => {
        if(error.response){
            console.log(error);
            this.setState({userData: {
              error: true}})
        }
    })
  } */

  render() {
    return (
      
      <div>
        <StockApp />
      </div>
      
    );
  }
}

export default App;
