import React from 'react';
import classes from './Header.css';
import Aux from './../../hoc/Aux/Aux';
import {Link,Route, NavLink, Switch, Redirect}from 'react-router-dom'
import Login from './../Login/Login';
import Signup from './../Signup/Signup';
const header = (props) => {
    console.log(props);
    return (
        <Aux>
            <header className={classes.Header}>
                <ul>
                    <li>
                        <NavLink 
                            to="/login"
                            activeClassName="selected">Login </NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Signup </NavLink>
                    </li>
                    <li className={classes.dropdown}>
                        <a href="javascript:void(0)" className={classes.dropbtn}>Dropdown</a>
                        <div className={classes.dropdowncontent}>
                        <NavLink to="/dropdown">Dropdown </NavLink>
                        <NavLink to="/dropdown">Dropdown2 </NavLink>
                        </div>
                    </li>
                </ul>
                
            </header>
            
        </Aux>
    )
}

export default header;