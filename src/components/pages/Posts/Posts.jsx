import { collection, onSnapshot, orderBy,query } from 'firebase/firestore';
import React, { useEffect,useState } from 'react'
import { auth, db } from '../../../firebase/FirebaseConfig';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
  const [posts,setPosts] = useState([]);

  useEffect(() =>{
    console.log(auth.currentUser);
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
      {posts.map(({id,title,description,imageUrl,createdAt,tag}) => (
        <Post
         key={id} 
         title={title} 
         imageUrl={imageUrl}
         description={description}
         createdAt={createdAt}
         tag={tag}
          />
      ))}
    </div>
  )
}

export default Posts