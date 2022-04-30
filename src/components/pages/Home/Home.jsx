import React from 'react'
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import Posts from '../Posts/Posts';
import './Home.css';

const Home = () => {
  return (
    <section id='home'>
        <Header/>
        <div className="home-split">
          <Posts/>
          <Sidebar/>
        </div>
        
    </section>
  )
}

export default Home