import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navBar'>
      <h2 className='navLogo'><span>H</span>aruki</h2>
      <ul className='navLists'>
        <li className='navItem'>Home</li>
        <li className='navItem'>About</li>
        <li className='navItem'>Create</li>
        <button className='loginBtn'>Login</button>
      </ul>
      
      
    </nav>
  )
}

export default Navbar