import React from "react";
import { TextField } from "@mui/material";


function FiltersAndSearch({ search, setSearch, contacts }) {
  function handleChange(e) {
    setSearch(e.target.value);
    searchContacts(search);
  }
  function searchContacts(search) {
    const filteredContacts = contacts.filter((contact) =>
      contact.firstname.toLowerCase().includes(search))
     
  }

 

  return (
    <div>
      <div className="smallcard">
        <h4>Search by name:</h4>
        <TextField
          value={search}
          id="search"
          variant="outlined"
          aria-label="first name"
          onChange={handleChange}
          type="text"
          name="firstname"
        />
        <br></br>
        <input type="checkbox" id="showOnlyDonors" />
        <label htmlFor="showOnlyDonors">Show only non-donors </label>
      </div>
    </div>
  );
}

export default FiltersAndSearch;
