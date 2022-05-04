import React from 'react';
import RecentPost from '../RecentPost/RecentPost';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <section className='sidebar'>
        <h3>Category</h3>
        <div className="cats">
            <span>Travel</span>
            <span>Technology</span>
            <span>Sports</span>
            <span>Food</span>
            <span>Music</span>
            <span>Business</span>
            
            
        </div>
       
    </section>
  )
}

export default Sidebar