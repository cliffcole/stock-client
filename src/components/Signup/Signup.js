import React from 'react';
import classes from './Signup.css';

const signup = (props) => {
    console.log(props);
    return (
        <div>
            <div className={classes.Signup}> 
                <form onSubmit={props.handlesignup} >
                    <div className={classes.Label}>
                        
                        <label className={classes.Label}>Username: </label>
                        <input className={classes.Label} type="text" name="username" autoComplete="username" placeholder="username" required/>
                        
                    </div>
                    <div className={classes.Label}>
                        <label>Password: </label>
                        <input type="password" name="password" autoComplete="current-password" placeholder="password" required/>
                    </div>
                    <div className={classes.Label}>
                        <label>Email Address: </label>
                        <input type="text" name="email" placeholder="email" required/>
                    </div>
                    <div className={classes.Label}>
                        <input type="submit" value="submit" /> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default signup;