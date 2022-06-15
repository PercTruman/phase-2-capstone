import React from "react";
import { TextField } from "@mui/material";

function Search({ search, handleChange }) {
  return (
    <div>
      <div className="smallcard">
        <h4>Search by last name:</h4>
        <TextField
          value={search}
          id="search"
          variant="outlined"
          aria-label="first name"
          onChange={handleChange}
          type="text"
          name="firstname"
        />
      </div>
    </div>
  );
}

export default Search;
