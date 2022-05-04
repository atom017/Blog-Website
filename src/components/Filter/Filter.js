import React from 'react'

const Filter = () => {
  return (
    <div className="filters">
        <label for="tags">Tags:</label>

        <select name="tags" >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
          </div>
  )
}

export default Filter