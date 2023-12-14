// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Register from './components/Register';
import Main from './components/Main';

function App() {
  return (
    
    <BrowserRouter>
        <Header/>
        <div className="App-header">
          {/* <Link to="/login">Login</Link>
          <Link to="/register">Register</Link> */}
        </div>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
