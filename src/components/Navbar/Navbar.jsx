import React, { useEffect, useState } from 'react'
import { Link,NavLink, useNavigate} from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import {signOut} from 'firebase/auth'
import './Navbar.css';
import { auth } from '../../firebase/FirebaseConfig';

const Navbar = () => {
  let navigate = useNavigate();
  const {isAuth,setIsAuth} = useUserContext();
  const [toggleMenu,setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth);

    return()=>{
      window.removeEventListener('resize', changeWidth)
    }
  })
  const handleOpen = () =>{
    setToggleMenu(!toggleMenu);
  }

  const handleSignOut = () =>{
    signOut(auth);
    setIsAuth(false);
    localStorage.removeItem('isBlogAuth');
    navigate('/login');
  }

  
  return (
    <nav className='navBar'>
      <h2 className='navLogo'><span>H</span>aruki</h2>
      {(toggleMenu || screenWidth > 768) && 
      (<ul className='navLists'>
        <li className='navList'><Link to="/" className='navItem'>Home</Link></li>
        <li className='navList'><Link to="/" className='navItem'>About</Link></li>
        {isAuth &&<li className='navList'><Link to="/createPost" className='navItem'>Create</Link></li>
        }
        {isAuth ? <button onClick={handleSignOut} className='loginBtn'>Logout</button>:
        <Link to="/login"><button  className='loginBtn'>Login</button></Link>}

      </ul>)}
      
      <i className={toggleMenu ? 'fa-solid fa-xmark nav-bars': 'fa-solid fa-bars nav-bars'} onClick={handleOpen}></i>
     
    </nav>
  )
}

export default Navbar