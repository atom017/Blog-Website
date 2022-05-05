import React from 'react';
import './CreatePost.css';

const CreatePost = () => {
  return (
    <div className="createPost-Wrapper">
      <div className='createPost'>
        <h1>Create Post</h1>
        <form className='create-form'>
          <div className='input-group'>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder='Enter Title'/>
          </div>

          <div className="input-group">
            <label htmlFor="title">Description</label>
            <textarea name="" id="" cols="30" rows="4"></textarea>
          </div>
          
          <div className="input-group">
          <label htmlFor="">Image</label>
          <input type="file" className='image-input' accept='image/*'/>
          </div>

          <div className="input-group">
            <label htmlFor="tags">Category</label>
            <select name="tags" className='tags-select' >
              <option value="travel">Travel</option>
              <option value="sports">Sports</option>
              <option value="audi">Technology</option>
              <option value="life">Life</option>
            </select>
          </div>
        
        <button className='form-btn'>Publish</button>
        </form>
      </div>
    </div>
    
  )
}

export default CreatePost