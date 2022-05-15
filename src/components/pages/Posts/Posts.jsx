
import React, { useEffect } from 'react'
import { useUserContext } from '../../../context/UserContext';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
  const {showPosts} = useUserContext();

 
  return (
    <div className='grid'>
     
      {showPosts.length !=0 ? showPosts.map(({id,title,description,imageUrl,createdAt,tag,user}) => (
        <Post
         key={id} 
         id={id}
         title={title} 
         imageUrl={imageUrl}
         description={description}
         createdAt={createdAt}
         tag={tag}
         user={user}
          />
      )):
      (<h2 className='nopostTitle'>No posts to show!</h2>)
    }
      
    </div>
  )
  
  
}





export default Posts