import React from "react";
import { NavLink } from "react-router-dom";

function GeneralInfoList({
  id,
  name,
  hasDonated,
}) 
{
 
return (
    <div className="cardContainer">
      <div className="smallcard">
          <h4>{name}</h4>
          <h4>Donor? {hasDonated ? "Yes" : "No"}</h4>
          <NavLink to = {`/mycontacts/${id}`}>Contact Details</NavLink>
      </div>
    </div>
  );
}

export default GeneralInfoList;
