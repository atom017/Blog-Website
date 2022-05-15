import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import {signOut} from 'firebase/auth'
import './Navbar.css';
import { auth } from '../../firebase/FirebaseConfig';

const Navbar = () => {
  let navigate = useNavigate();
  const {isAuth,setIsAuth,toggleMenu,setToggleMenu,currentUser} = useUserContext();
  
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
    localStorage.removeItem('currentUser');
    navigate('/login');
  }

  
  return (
    <nav className='navBar'>
      <h2 className='navLogo'><span>H</span>aruki</h2>
      
      <div className='navRight'>
        {isAuth && (
            <div className='avatar'>
            <img className='avatarImg' src={currentUser.photoURL} alt="img" />
             
            </div>
        )}
          
        {(toggleMenu || screenWidth > 768) && 
      (<ul className='navLists'>
        <li className='navList' ><Link to="/" className='navItem' >Home</Link></li>
        <li className='navList'><Link to="/about" className='navItem'>About</Link></li>
        {isAuth &&<li className='navList'><Link to="/createPost" className='navItem'>Create</Link></li>
        }
        {isAuth ? <li className='navList navItem' onClick={handleSignOut} >Logout</li>:
        <li className='navList'><Link className='navItem' to="/login">Login</Link></li>}

      </ul>)}

      <i className={toggleMenu ? 'fa-solid fa-xmark nav-bars': 'fa-solid fa-bars nav-bars'} onClick={handleOpen}></i>
      </div>
      
      
    </nav>
  )
}

export default Navbar