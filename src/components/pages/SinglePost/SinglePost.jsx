import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { auth, db, storage } from '../../../firebase/FirebaseConfig';
import './SinglePost.css';
import { toast,ToastClassName, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteObject,ref} from 'firebase/storage';
import { useUserContext } from '../../../context/UserContext';

const SinglePost = () => {
  let navigate = useNavigate();
  const params  = useParams();
  const {id} = params;
  const {currentUser} = useUserContext();
  const [postDetail,setPostDetail] = useState();
  
  
  const getPost = async () =>{
    const postDoc = doc(db,'Posts',id);
    const result = await getDoc(postDoc);
    if(result){
      setPostDetail(result.data())
    }
  }
  useEffect( () =>{
    getPost();
    
  },[]);

  const handleDelete=async () =>{
    try {
      
      const imageUrl = postDetail.imageUrl;
      await deleteDoc(doc(db,'Posts',id));
      toast('Post Deleted!',{type:"success"});
      const storageRef = ref(storage,imageUrl);
      await deleteObject(storageRef);
      navigate('/');
    } catch (error) {
      toast('Error deleting Post!',{type:"error"})
    }
    
  }

  const handlePostEdit = () =>{
    navigate(`/singlePost/${id}/edit`)
  }
 
  if (postDetail) {return (
    
    <div className='home-split'>
      
        <div className='singlePost'>
          <div className="singlePostImg-container">
            <img className='singlePostImg' src={postDetail.imageUrl} alt="" />
          </div> 
          
          <div className="singlePost-text">
            <h2>{postDetail.title}</h2>
            <div className='singlePost-info'>
              
              <div className='singlePost-spans'>
                <span>Author: <b>{postDetail.user.name}</b> </span>
                <span>Date: <b>{postDetail.createdAt.toDate().toDateString()}</b></span>
              </div>

              {((currentUser) && (currentUser.id === postDetail.user.id)) &&
               (
                <div className='singlePost-icons'>
                <button onClick={handlePostEdit}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={handleDelete}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
              )}
              
              
            </div>
            <p className='singlePostPara'>{postDetail.description}</p>
          </div>
        </div>
        <ToastContainer/>
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