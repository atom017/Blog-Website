import React, { useEffect } from 'react';
import './Login.css'
import {auth,provider} from '../../../firebase/FirebaseConfig';
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/UserContext';


const Login = () => {
  const {setIsAuth,setCurrentUser,currentUser}= useUserContext();
  let navigate  = useNavigate();

  const loginGoogle = () =>{
    
    signInWithPopup(auth,provider)
    .then((result) =>{
      setIsAuth(true);
      setCurrentUser({
        id:auth.currentUser.uid,
        name:auth.currentUser.displayName,
        photoURL:auth.currentUser.photoURL
      })
      localStorage.setItem("isBlogAuth",true);
      navigate('/');
     
    })
   

    
  }
 
  return (
    <div className='login-container'>
      <h3 className='login-text'>Sign in to Create Post</h3>
      <button type="button" className="google-btn" onClick={loginGoogle} >
      Sign in with Google
    </button>
  
    </div>
    
    
  )
}

export default Login