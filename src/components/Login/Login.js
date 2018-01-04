import React from 'react';
import classes from './Login.css';
//import {Link} from 'react-router-dom';
//import axios from 'axios';

const login = (props) => {
    //console.log(props);
    console.log(props);
    let test = null
    return(
        <div>
            <div className={classes.Login}> 
                <form onSubmit={props.handlelogin} >
                    <div className={classes.Label}>
                        
                        <label className={classes.Label}>Username: </label>
                        <input className={classes.Label} type="text" name="username" autoComplete="username" placeholder="username" required/>
                        
                    </div>
                    <div className={classes.Label}>
                        <label>Password: </label>
                        <input type="password" name="password" autoComplete="current-password" placeholder="password" required/>
                    </div>
                    <div className={classes.Label}>
                        <input type="submit" value="submit" /> 
                    </div>
                    {props.userdata.isLoggedIn ? <p>User Logged In </p> : <p>User Not Logged in</p>}
            {props.userdata.token ? <p>{props.userdata.token}</p> : null}
            {props.userdata.error ? <p>Bad username or password</p> : null}
                </form>
            </div>
        </div>
    )
}


export default login
