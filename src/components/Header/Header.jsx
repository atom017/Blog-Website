import React from 'react'
import './Header.css';

const Header = () => {
  return (
      <div className='header'>
          <div className='heroContainer' >
            {/* <img className='heroImg' src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt="" /> */}
            <div className="hero-text">
              <h1 className='heroTitle'>Haruki Blog</h1>
              <p>Start your wonderful journey here</p>
              <button className='btn'>Create Now</button>
            </div>
            
          </div>
            
      </div>
    
    
  )
}

export default Header