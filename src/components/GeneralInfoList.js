import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Card } from "@mui/material";

function GeneralInfoList({ filteredContacts }) {

  const list = filteredContacts.map((card) => (    
    <Card
      key={card.id}
      variant="outlined"
      sx={{
        border: "1px solid black",
        textAlign: "center",
        marginBottom: "2rem",
        width: "30%",
      }}
    >
      <div>
        <h4>
          {card.firstname} {card.lastname}
        </h4>
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
      </div>
    </Card>
  ));

  return (
    <div className="cardContainer">
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {list}
      </Container>
    </div>
  );
}

export default GeneralInfoList;
