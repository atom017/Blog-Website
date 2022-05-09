import React, { useEffect } from 'react'
import { useUserContext } from '../../../context/UserContext';
import Filter from '../../Filter/Filter';
import Header from '../../Header/Header';
import Posts from '../Posts/Posts';
import './Home.css';

const Home = () => {
  const {currentUser} = useUserContext();

  useEffect(()=>{
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
  },[currentUser])
  return (
    <section id='home'>
        <Header/>
        <div className="home-split">
           
          <Posts/>
        </div>
        
    </section>
  )
}

export default Home