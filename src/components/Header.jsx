import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'


const Header = () => {
  return (
    <header className='heading'>
        <h2 className="logo">GameMates</h2>
        <nav className="navigation d-flex align-items-center">
            <a className="nav-link" href="home.html">Home</a>
            <a className="nav-link" href="eye.html">Eye Training</a>
            <a className="nav-link" href="about.html">About Us</a>
            <a className="nav-link" href="faqs.html">FAQs</a>
            <Link className='btnLogin-popup' to="/login">Login</Link>
          <Link className='btnLogin-popup' to="/register">SignUp</Link>
        </nav>
    </header>
  )
}

export default Header

