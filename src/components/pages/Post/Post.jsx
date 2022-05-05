import React from 'react'
import {useHistory, useNavigate} from 'react-router-dom';
import './Post.css';

const Post = ({id,title,description,imageUrl,createdAt,tag}) => {
  let navigate = useNavigate();

  const handleClick = () =>{
    navigate('/singlePost');
  }
  
  return (
    
    <div className="card" onClick={handleClick}>
      <div className="card-header">
        <img src={imageUrl} alt="rover" />
        <span className="tag">{tag}</span>
      </div>
      <div className="card-body">
        
        <h4>
          {title}
        </h4>
        <p className='card-paragraph'>
          {description}
        </p>

        {/* user */}
        <div className="user">
          <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" />
          <div className="user-info">
            <h5>Carrie Brewer</h5>
            <small>{createdAt.toDate().toDateString()}</small>
          </div>
        </div>
      </div> 
    </div>
   
  )
}

export default Post