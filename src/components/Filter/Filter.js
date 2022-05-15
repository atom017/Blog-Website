
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../context/UserContext';
import './Filter.css'

const Filter = () => {
  const [searchText,setSearchText] = useState('');
  const [tag,setTag] = useState('');
  const {posts,setShowPosts} = useUserContext();

  const handleSearch =  (e) =>{
    const searchTerm = searchText.trim().toLowerCase();
    
    if(e.key === 'Enter'){
      const tempPosts= posts.filter(post => post.title.toLowerCase().includes(searchTerm));
    //console.log(tempPosts);
    setShowPosts(tempPosts);
    setSearchText('');
    }
  
  }

  const handleOnSelect =(e) =>{
    setTag(e.target.value);
    
  }
  useEffect(() =>{
    filterTags();
  },[tag]);
  const filterTags = () =>{
    if(tag === 'all'){
      setShowPosts(posts);
      return;
    }
    const tempPosts= posts.filter(post => post.tag.toLowerCase().includes(tag));
    setShowPosts(tempPosts);
  }
  return (
    <div className="filters">
      <div className="tags">
      
      <select 
      name="tags" 
      className='tags-select'
      value={tag} 
      onChange={(e) =>{handleOnSelect(e)}}
      >
      <option value="all">All</option>
      <option value="travel">Travel</option>
      
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            <option value="life">Life</option>
            <option value="education">Education</option>
            <option value="food">Food</option>
            <option value="business">Buiness</option>
      </select>
      </div>

    <div className='searchContainer'>
        <input 
        value={searchText}
        type="text"
        placeholder='search by title...' 
        className='searchInput'
        onChange={(e)=>setSearchText(e.target.value)}
        onKeyPress={(e) => handleSearch(e)}

        />
        <i className="fa-solid fa-magnifying-glass searchIcon"></i>
    </div>
    
    </div>
  )
}

export default Filter