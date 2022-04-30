import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './RecentPost.css';

const RecentPost = () => {
  return (
    <div className='recentPost'>
      <h3>Recent</h3>
      <div className="recent">
        <img src="https://images.unsplash.com/photo-1651237136427-50d2c1c14516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="" />
        <div className="recent-text">
          <h5>This is title of the best all time</h5>
          <p>3 hr</p>
        </div>
      </div>

      <div className="recent">
        <img src="https://images.unsplash.com/photo-1651237136427-50d2c1c14516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="" />
        <div className="recent-text">
          <h4>Hello</h4>
          <p>3 hr</p>
        </div>
      </div>
    </div>
  )
}

export default RecentPost