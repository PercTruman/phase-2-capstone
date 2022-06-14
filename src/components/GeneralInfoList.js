import React from "react";
import ContactDetails from "./ContactDetails";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Card } from "@mui/material";

function GeneralInfoList({cards}) {
  const list = cards.map((card)=>
  <div>
      <h4>{card.name}</h4>
      <h4>Donor? {card.hasDonated ? "Yes" : "No"}</h4>
      <Link
        style={{
          display: "block",
          paddingBottom: "15px",
          textAlign: "center",
        }}
        to={`/contacts/${card.id}`}
      >
        Contact Details
      </Link>
   </div>)

  return (
    <div className="cardContainer">
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Card
          variant="outlined"
          sx={{
            border: "1px solid black",
            textAlign: "center",
            marginBottom: "2rem",
            width: "30%",
          }}
        >
          {list}
        </Card>
      </Container>
      <ContactDetails />
    </div>
  );
}

export default GeneralInfoList;
