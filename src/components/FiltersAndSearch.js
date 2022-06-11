import React from 'react'


function FiltersAndSearch() {
  function handleChange(){
    console.log('hi')
  }
  return (
    <div>
      <h4>Search by name:</h4>
        <input value='' type="text" name="firstname" aria-label="first name" onChange={handleChange}></input>
        <label for="checkbox">
        <input type="checkbox" id="checkbox" name="checkbox" />
        Show only non-donors
      </label>
    </div>
  )
}

export default FiltersAndSearch