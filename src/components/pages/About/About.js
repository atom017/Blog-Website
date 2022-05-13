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
        
        <p>This is a minimal blog website where you can create,delete and edit your posts.
           Other functionality includes logging in and  logging out. It  is intended to add more functionalities like filtering by category, get the current user's posts in this blog website.
           Thank you for coming here.</p>
        
        <button className='btn' onClick={handleClick}>Back To Home</button>
    </div>
  )
}

export default About