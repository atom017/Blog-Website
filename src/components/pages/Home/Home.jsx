import React from 'react'
import Header from '../../Header/Header';
import Posts from '../Posts/Posts';
import './Home.css';

const Home = () => {
  return (
    <section id='home'>
        <Header/>
        <div className="home-split">
          <div className="filters">
            <label for="cars">Choose a car:</label>

            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <Posts/>
        </div>
        
    </section>
  )
}

export default Home