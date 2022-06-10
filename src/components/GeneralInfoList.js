import React from "react";
import { NavLink } from "react-router-dom";

function GeneralInfoList({
  id,
  name,
  hasDonated,
}) 
{
 
return (
    <div className="card">
      <h4>{name}</h4>
      <h4>Donor? {hasDonated ? "Yes" : "No"}</h4>
      <NavLink to = {`/mycontacts/${id}`}>See Details</NavLink>
    </div>
  );
}

export default GeneralInfoList;
