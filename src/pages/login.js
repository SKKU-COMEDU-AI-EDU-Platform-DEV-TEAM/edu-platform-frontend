import React from 'react';
import "../css/input.css"
import "../css/login.css"
function Login() {
  return (
    <div class="loginWrapper">
        <div class="loginImg" contenteditable>
            <center>
                <img src="login.png" alt="loginImg"/>
            </center>
        </div>
        <div class="loginInput" contenteditable>
            <center>
                <h1>Welcome back!</h1>
                <p>Don't have an account? <a href="/join">Sign up</a></p>
                <form action="/">
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" id="email" name="email"/><br/>
                    
                    <label htmlFor="password" >Password</label><br/>
                    <input type="password" id="password" name="password" /><br/>

                    <input type="submit" value="Sign Up"/>
                </form> 
            </center>
        </div>
    </div>
  )
}

export default Login;
