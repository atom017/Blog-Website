import React from 'react'
import Filter from '../../Filter/Filter';
import Header from '../../Header/Header';
import Posts from '../Posts/Posts';
import './Home.css';

const Home = () => {
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