import React, { useEffect } from 'react'
import { useUserContext } from '../../../context/UserContext';
import Filter from '../../Filter/Filter';
import Header from '../../Header/Header';
import Posts from '../Posts/Posts';
import './Home.css';

const Home = () => {
  const {isAuth,currentUser} = useUserContext();
  
  useEffect(() =>{
    console.log('isAuth',isAuth,currentUser);
    if(isAuth == true){
      localStorage.setItem('isBlogAuth',true);
      localStorage.setItem('currentUser',JSON.stringify(currentUser));
    }

  },[isAuth])
  
  return (
    <section id='home'>
        <Header/>
        <div className="home-split">
          <Filter/>
          <Posts/>
        </div>
        
    </section>
  )
}

export default Home