import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../../firebase/FirebaseConfig';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EditPost.css'

const EditPost = () => {
  
    const [postDetail,setPostDetail] = useState({
        title:'',
        description:'',
        createdAt:'',
        user:null,
        imageUrl:''
    });
    const params  = useParams();
    const {id} = params;
    
    const getPost = async () =>{
        const postDoc = doc(db,'Posts',id);
        const result = await getDoc(postDoc);
        if(result){
          
          setPostDetail(result.data())
          
        }
    }

    useEffect(() =>{
        getPost();
    },[])

    const handleUpdate = async (e) =>{
        e.preventDefault();
        try {
            const postDoc = doc(db,'Posts',id);
        await updateDoc(postDoc,postDetail);
        toast('Post updated',{type:"success"});
        } catch (error) {
            toast('Error Updating!',{type:'error'})
        }
        
    }
    
  return (
    <div className='editPost'>
        <form >
            <div>
                <img className="editImg" src={postDetail.imageUrl} alt="img" />
            </div>
            <div className="input-group">
                <label htmlFor="title">Title</label>
                <input
                 type="text" value={postDetail.title}
                 onChange={(e) =>{setPostDetail({...postDetail,title:e.target.value})}}
                 />
            </div>

            <div className="input-group">
                <label htmlFor="description">Description</label>
               <textarea 
                cols="30" rows="6"
                value={postDetail.description}
                onChange={(e) =>{setPostDetail({...postDetail,description:e.target.value})}}
                ></textarea>
            </div>

            <div className="input-group">
            <label htmlFor="tags">Category</label>
            <select name="tags" className='tags-select' 
             value={postDetail.tag}
            >
              <option value="travel">Travel</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
              <option value="life">Life</option>
              <option value="education">Education</option>
              <option value="food">Food</option>
              <option value="business">Buiness</option>
            </select>

            <button onClick={(e) => handleUpdate(e)}>Update</button>
          </div>
        </form>
    </div>
  )
}

export default EditPost