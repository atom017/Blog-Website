import React, { useState } from 'react'
import { Link,NavLink} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  const handleOpen = () =>{
    setToggleMenu(!toggleMenu);
  }
  return (
    <nav className='navBar'>
      <h2 className='navLogo'><span>H</span>aruki</h2>
      <ul className='navLists'>
        <li ><NavLink to="/" className='navItem'>Home</NavLink></li>
        <li ><NavLink to="/" className='navItem'>About</NavLink></li>
        <li ><NavLink to="/createPost" className='navItem'>Create</NavLink></li>
        <NavLink><button className='loginBtn'>login</button></NavLink> 
      </ul>
      <i className={`fa-solid fa-bars nav-bars`} onClick={handleOpen}></i>
      
    </nav>
  )
}

export default Navbar