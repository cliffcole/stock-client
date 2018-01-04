import React, {Component} from 'react';
import axios from 'axios';
import Login from './../../components/Login/Login'
import Signup from './../../components/Signup/Signup'
import {Link,Route, NavLink, Switch, Redirect}from 'react-router-dom'
import Aux from './../../hoc/Aux/Aux'
import Header from './../../components/Header/Header';

class StockApp extends Component {
    state = {
        userData: {
            isLoggedIn: false,
            error: false,
            token: null
        }
        
    }
    
    handleLogin = (event) => {
        event.preventDefault();
        let username = event.target.username.value;
        let password = event.target.password.value;
        console.log(username, password);
        axios.post('/login', {
            username: username,
            password: password
        }).then(response => {
            console.log(response);
            if(response.status === 204){
                this.setState({userData:{
                    error: "Bad Username or Password"
                }})
            }else if (response.status === 200){
                if(response.data.token){
                    this.setState({userData: {
                        isLoggedIn: true,
                        token: response.data.token}
                    })
                }
            }
        
        }).catch(error => {
            if(error.response){
                console.log(error);
                this.setState({userData: {
                    error: true}})
            }
        })
    }

    handleSignup = (event) =>{
        event.preventDefault();
        console.log(event);
        let username = event.target.username.value;
        let password = event.target.password.value;
        let email = event.target.email.value;
        console.log(username, password,email);
        axios.post('/login/register', {
            username: username,
            password: password,
            email: email
        }).then(response => {
            console.log(response);
        })
    }

    render(){
        console.log(this.state);
        return(
            <Aux>
                <div>
                <Header />
                </div>
                <main>
                <div>
                <Route 
                    path="/login" 
                    render={(props) => (
                        <Login 
                            userdata={this.state.userData}
                            handlelogin={this.handleLogin}
                        />
                    )} 
                />
                <Route
                    path="/signup"
                    render={(props) => (
                        <Signup
                            userdata={this.state.userData}
                            handlesignup={this.handleSignup}
                        />
                    )}
                />
                </div>
                </main>
                {/* <Route 
                    path="/login" 
                    render={(props) => (
                        <Login 
                            userData={this.state.userData}
                            handleLogin={this.handleLogin}
                        />
                    )} 
                />
                <Route
                    path="/signup"
                    render={(props) => (
                        <Signup
                            userData={this.state.userData}
                            handleSignup={this.handleSignup}
                        />
                    )}
                /> */}
                {/* <Route path="/login" render={(props) => ({<Login userData={this.state.userData}/>}} /> */}
                {/* <Route path="/login" component={Login } userData={this.state.userData} /> */}
                {/* <Login 
                    handleSubmit={this.handleSubmit} 
                    userData={this.state.userData} 
                /> */}
            </Aux>
        )
    }
}

export default StockApp