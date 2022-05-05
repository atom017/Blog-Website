import React from 'react';
import './Filter.css'

const Filter = () => {
  return (
    <div className="filters">
      <div className="tags">
      
      <select name="tags" className='tags-select' >
          <option value="all">All</option>
          <option value="travel">Travel</option>
          <option value="sports">Sports</option>
          <option value="audi">Technology</option>
          <option value="life">Life</option>
      </select>
      </div>

    
    </div>
  )
}

export default Filter