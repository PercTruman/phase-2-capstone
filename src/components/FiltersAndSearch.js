import React from "react"

function FiltersAndSearch({search, setSearch, searchContacts}) {

  function handleChange(e){
    setSearch(e.target.value)
    searchContacts(search)
  }
  

  return (
    <div>
      <div className="smallcard">
      <h4>Search by name:</h4>
        <input  value={search}id='search' type="text" name="firstname" aria-label="first name" onChange={handleChange} />
        <br></br>
        <input type="checkbox" id="showOnlyDonors"/>
        <label htmlFor = "showOnlyDonors">Show only non-donors </label>
      </div>
    </div>
  )
}

export default FiltersAndSearch