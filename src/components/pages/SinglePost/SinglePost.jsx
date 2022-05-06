import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/FirebaseConfig';
import './SinglePost.css';

const SinglePost = () => {
  const params  = useParams();
  const {id} = params;
  const [postDetail,setPostDetail] = useState();
  
  const getPost = async () =>{
    const postDoc = doc(db,'Posts',id);
    const result = await getDoc(postDoc);
    if(result){
      console.log(result.data());
      setPostDetail(result.data())
    }
  }
  useEffect( () =>{
    getPost();
    
  },[])

 
  if (postDetail) {return (
    
    <div className='home-split'>
      {console.log('inside: ',postDetail)}
        <div className='singlePost'>
          <img className='singlePostImg' src={postDetail.imageUrl} alt="" />
          <div className="singlePost-text">
            <h2>{postDetail.title}</h2>
            <div className='singlePost-info'>
              <div className='singlePost-spans'>
                <span>Author: <b>{postDetail.user.name}</b> </span>
                <span>Date: <b>{postDetail.createdAt.toDate().toDateString()}</b></span>
              </div>
              
              <button>Delete</button>
            </div>
            <p className='singlePostPara'>{postDetail.description}</p>
          </div>
          
        </div>
        
    </div>
  )
}
else{
  return (
    <h2>Loading...</h2>
  )
}
}



export default SinglePost