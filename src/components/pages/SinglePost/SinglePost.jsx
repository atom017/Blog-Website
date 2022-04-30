import React from 'react'
import Sidebar from '../../Sidebar/Sidebar';
import './SinglePost.css';

const SinglePost = () => {
  return (
    <div className='home-split'>
        <div className='singlePost'>
          <img className='singlePostImg' src="https://images.unsplash.com/photo-1651219469237-9b5eff513fff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="" />
          <div className="singlePost-text">
            <h2>Title</h2>
            <div className='singlePost-info'>
              <div className='singlePost-spans'>
                <span>Author: <b>Haruki</b> </span>
                <span>Date: <b>2022 May</b></span>
              </div>
              
              <button>Delete</button>
            </div>
            <p className='singlePostPara'>Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Rem magnam ipsum mollitia pariatur culpa delectus provident architecto deleniti ipsam atque, corrupti illo incidunt, et maiores sint nobis beatae assumenda reiciendis?</p>
          </div>
          
        </div>
        <Sidebar/>
    </div>
  )
}

export default SinglePost