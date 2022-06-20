import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";

function GeneralInfoList({ filteredContacts }) {
  const list = filteredContacts.map((card) => (
    <Grid item xs={4}>
      <Paper
        elevation={18}
        style={{ margin: "0px 0px 8px 0px", border: "1px solid black" }}
        key={card.id}
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
      </Paper>
    </Grid>
  ));

  return (
    <div className="cardContainer">
      <Grid container spacing={3}>
        {list}
      </Grid>
    </div>
  );
}

export default GeneralInfoList;
