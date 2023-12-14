import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react'
import {BrowserRouter, Link, NavLink, Route, Routes} from  'react-router-dom'
import Home from './page/home';

function App() {



  return (
    <BrowserRouter>
    <div className="App">
    <header className='nav-bar'>
      <img src={logo} className="App-logo" alt="logo"  />
      <div style={{margin:'auto'}}></div>
      <NavLink  className={({isActive}) =>  isActive && 'selected'}  to='home' style={{marginRight:'10px'}}>Home</NavLink>
      <NavLink  className={({isActive}) =>  isActive && 'selected'} to='about'  style={{marginRight:'10px'}}>About</NavLink>
      <NavLink  className={({isActive}) =>  isActive && 'selected'} to='contact' style={{marginRight:'10px'}}>Contact</NavLink>
      
    

    </header>
    <section className='main-section'>
     
      <Routes>
        <Route path='/' element={<h1>Landing Page</h1>} />
        <Route path='/home' element={<Home />} >
            <Route path='/home' element={<h1>Home index</h1>} />
            <Route path='/home/product' element={<h1>product comp</h1>} />
            <Route path='/home/order' element={<h1>order comp</h1>} />
        </Route>
     
        <Route path='/about' element={<h1>about</h1>} />
        <Route path='/contact' element={<h1>contact</h1>} />
      </Routes>
      
    </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
