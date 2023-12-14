import React from 'react'
import '../css/Signup.css'
const Register = () => {
  return (
    <div className="wrapper">
        <a href="home.html" className="icone-close">
            <ion-icon name="close"></ion-icon>
        </a>
        <div className="form-box register">
            <h2>Registration</h2>
            <form action="#" id="">
                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="person"></ion-icon>
                    </span>
                    <input type="text" id="text" required/>
                    <label for="text">Username</label>
                </div>

                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="email" id="email2" required/>
                    <label for="email2">E-mail</label>
                </div>

                <div className="input-box">
                    <span className="icon">
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" id="password2" required/>
                    <label for="password">Password</label>
                </div>
                <div className="remember-forgot">
                    <label for="checkbox">
                        <input type="checkbox" id="checkbox2"/>
                        Agree to the terms and conditions
                    </label>
                </div>
                <button type="submit" className="btn">Signup</button>
                <div className="login-register">
                    <p className="have-account">
                        Already have an account?
                        <a href="login" className="login-link">Login</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register