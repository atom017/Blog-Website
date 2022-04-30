import React from 'react';
import './CreatePost.css';

const CreatePost = () => {
  return (
    <div className='createPost'>
      <h1>Create Post</h1>
      <form className='create-form'>
        <div className='input-group'>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder='Enter Title'/>
        </div>

        <div className="input-group">
          <label htmlFor="title">Description</label>
          <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
        
        <div className="input-group">
        <label htmlFor="">Image</label>
       <input type="file" accept='image/*'/>
        </div>
       
       <button className='btn'>Publish</button>
      </form>
    </div>
  )
}

export default CreatePost