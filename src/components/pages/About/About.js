import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'

const About = () => {
  let navigate = useNavigate();
  const handleClick = () =>{
    navigate('/');
  }
  return (
    <div className='aboutPage'>
        <div className="about-title">
            <h1>About Us</h1>
        </div>
        
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, labore. Illo magni sapiente aperiam eum voluptatum, asperiores quibusdam unde nulla corrupti aliquid sunt. Ullam, cum id maiores delectus placeat laudantium!</p>
        
        <button className='btn' onClick={handleClick}>Back To Home</button>
    </div>
  )
}

export default About