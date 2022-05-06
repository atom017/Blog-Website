import React from 'react'
import { useNavigate} from 'react-router-dom';
import { useUserContext } from '../../../context/UserContext';
import './Post.css';

const Post = ({id,title,description,imageUrl,createdAt,tag,user}) => {
  let navigate = useNavigate();
  
  return (
    
    <div className="card" onClick={() => navigate(`singlePost/${id}`)}>
      <div className="card-header">
        <img src={imageUrl} alt="rover" />
        <span className="tag">{tag}</span>
      </div>
      <div className="card-body">
        
        <h4>
          {title}
        </h4>
        <p className='card-paragraph'>
          <span className='truncate'>{description}</span>
          
        </p>

        {/* user */}
        <div className="user">
          <img src={user.photoURL} alt="user" />
          <div className="user-info">
            <h5>{user.name}</h5>
            <small>{createdAt.toDate().toDateString()}</small>
          </div>
        </div>
      </div> 
    </div>
   
  )
}

export default Post