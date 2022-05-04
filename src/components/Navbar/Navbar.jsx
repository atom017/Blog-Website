import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navBar'>
      <h2 className='navLogo'><span>H</span>aruki</h2>
      <ul className='navLists'>
        <li ><Link to="/" className='navItem'>Home</Link></li>
        <li ><Link to="/" className='navItem'>About</Link></li>
        <li ><Link to="/createPost" className='navItem'>Create</Link></li>
        <button className='loginBtn'><Link to="/login">Login</Link></button>
      </ul>
      
      
    </nav>
  )
}

export default Navbar