import { collection, onSnapshot, orderBy,query } from 'firebase/firestore';
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase/FirebaseConfig';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
  const [posts,setPosts] = useState([]);
  let navigate=useNavigate();

  useEffect(() =>{
    
    const blogRef = collection(db,"Posts");
    const q = query(blogRef,orderBy("createdAt","desc"));
    onSnapshot(q,(snapshot) =>{
      const allposts = snapshot.docs.map((doc) =>({
        id:doc.id,
        ...doc.data()
      }))
      setPosts(allposts);
      
    })
  },[])
  return (
    <div className='grid'>
      {posts.map(({id,title,description,imageUrl,createdAt,tag,user}) => (
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
      ))}
    </div>
  )
}

export default Posts