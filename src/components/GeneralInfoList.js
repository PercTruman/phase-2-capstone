import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/system";
import { Card } from "@mui/material";

function GeneralInfoList({ id, name, hasDonated }) {
  return (
    <div className="cardContainer">
      <Container maxWidth="sm">

      <Card variant="outlined"><h4>{name}</h4>
          <h4>Donor? {hasDonated ? "Yes" : "No"}</h4>
          <NavLink to={`/mycontacts/${id}`}>Contact Details</NavLink>
      </Card>
      </Container>
    </div>
  );
}

export default GeneralInfoList;
{/* <div className="cardContainer"> */}


{/* <div className="smallcard">
<h4>{name}</h4>
<h4>Donor? {hasDonated ? "Yes" : "No"}</h4>
<NavLink to={`/mycontacts/${id}`}>Contact Details</NavLink>
</div> */}
