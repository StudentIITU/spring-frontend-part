import React from 'react';
import '../css/Login.css';
const Login = () => {
    return (

        <div className="wrapper">
        <a href="home.html" className="icone-close">
            <ion-icon name="close"></ion-icon>
        </a>
        <div className="form-box login">
            <h2>Login</h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="email" id="email1" required/>
                    <label for="email1">E-mail</label>
                </div>

                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" id="password" required/>
                    <label for="password">Password</label>
                </div>
                <div className="remember-forgot">
                    <label for="checkbox">
                        <input type="checkbox" id="checkbox"/>
                        Remember me
                    </label>
                    <a href="">Forgot Password?</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="login-register">
                    <p>
                        Don't have an account?
                        <a href="">
                            <button>

                            </button>
                        </a>
                        <a href="register" className="register-link">Signup</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Login;