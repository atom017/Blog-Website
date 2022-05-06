import React,{useState} from 'react';
import './CreatePost.css';
import { addDoc, collection, Timestamp} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import { useUserContext } from '../../../context/UserContext';
import { db, storage } from '../../../firebase/FirebaseConfig';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
  const {user} = useUserContext();
  const [imgPreview,setImgPreview] = useState('');
  
  const [formData,setFormData]= useState({
    title:'',
    description:'',
    image:'',
    tag:'travel',
    createdAt:Timestamp.now().toDate(),
    user:user
  })

  const handleImageChange = (e) =>{
    setFormData({...formData,image:e.target.files[0]});
    setImgPreview(URL.createObjectURL(e.target.files[0]));
    
  }

  const handlePublish = (e) =>{
    
    e.preventDefault();
    if(!formData.title || !formData.description || !formData.image){
      alert('Please fill all the fields');
      return
    }

    const storageRef = ref(storage,`images/${formData.image.name}${Date.now()}`);

    const uploadImage=uploadBytesResumable(storageRef,formData.image)
    uploadImage.on("state_changed",
    (snapshot) =>{},
    (err)=>{
      console.log(err);
    },
    () =>{
     
      
      getDownloadURL(uploadImage.snapshot.ref)
      .then((url) =>{
        const postRef = collection(db,'Posts');
        console.log(user);
        addDoc(postRef,{
          title:formData.title,
          description:formData.description,
          imageUrl:url,
          tag:formData.tag,
          createdAt:Timestamp.now().toDate(),
          user:user
        }).then(()=>{
          toast("Post added Successfully", {type:"success"});
          console.log('uploaded!');
        })
        .catch(err=>{
          toast("Error creating post!",{type:"error"});
        })
      })

      setFormData({
        title:'',
        description:'',
        image:'',
        tag:'',
      });

    }
    )
  }

  return (
    <div className="createPost-Wrapper">
      <div className='createPost'>
        <h1>Create Post</h1>
        <form className='create-form'>
          <div className='input-group'>
            <label htmlFor="title">Title</label>
            <input 
            type="text" 
            placeholder='Enter Title'
            value={formData.title}
            onChange={(e) => setFormData({...formData,title:e.target.value})}
            />
          </div>

          <div className="input-group">
            <label htmlFor="title">Description</label>
            <textarea  
            cols="30" rows="4"
            value={formData.description}
            onChange={(e) => setFormData({...formData,description:e.target.value})}
            ></textarea>
          </div>
          
          <div className="input-group">
          <label htmlFor="">Image</label>
          
            <input 
            type="file" 
            className='image-input' 
            accept='image/*'
            onChange={(e) =>handleImageChange(e)}
            />
              
          </div>
          
        
          <div className="input-group">
            <label htmlFor="tags">Category</label>
            <select name="tags" className='tags-select' 
            value={formData.tag}
            onChange={(e) => setFormData({...formData,tag:e.target.value})}
            >
              <option value="travel">Travel</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
              <option value="life">Life</option>
              <option value="education">Education</option>
              <option value="food">Food</option>
              <option value="business">Buiness</option>
            </select>
          </div>
        
        <button className='form-btn'
        onClick={(e) => handlePublish(e)}
        >Publish</button>
        </form>
        
      </div>
      <ToastContainer/>
    </div>
    
  )
}

export default CreatePost