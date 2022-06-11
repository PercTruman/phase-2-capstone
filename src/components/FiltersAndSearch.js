import React from "react"

function FiltersAndSearch({search, setSearch, searchContacts}) {

  function handleChange(e){
    setSearch(e.target.value)
    searchContacts(search)
  }
  

  return (
    <div>
      <h4>Search by name:</h4>
        <input  value={search}id='search' type="text" name="firstname" aria-label="first name" onChange={handleChange}></input>
        <br></br>
        <label htmlFor = "showOnlyDonors"></label>
        <input type="checkbox" id="showOnlyDonors" name="checkbox" />
        Show only non-donors
    </div>
  )
}

export default FiltersAndSearch