import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/system";
import { Card } from "@mui/material";

function GeneralInfoList({ id, name, hasDonated }) {
  return (
    <div className="cardContainer">
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Card
          variant="outlined"
          sx={{ border:'1px solid black', textAlign: "center", marginBottom: "2rem", width: "30%" }}
        >
          <h4>{name}</h4>
          <h4>Donor? {hasDonated ? "Yes" : "No"}</h4>
          <NavLink
            style={{
              display: "block",
              paddingBottom: "15px",
              textAlign: "center",
            }}
            to={`/contacts/${id}`}
          >
            Contact Details
          </NavLink>
        </Card>
      </Container>
    </div>
  );
}

export default GeneralInfoList;
