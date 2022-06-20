import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";

function NavBar() {
  const titleStyle={
    fontFamily: "Oswald",
    width: "40%",
    fontSize: "32px",
    display: "block",
    padding: "30px"
  }
  const linkStyle={
    textDecoration: "none",
    color: "yellow"
  }
  return (
    <AppBar position="static" sx={{height:"8rem"}}>
      <Toolbar>
        <img src = ".../public/train.jpg" alt="train logo"/>
        <Typography style={titleStyle} variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Gravy Train: Finally, A Fundraiser That Works As Hard As You Do
        </Typography>
        <Stack direction="row" spacing={2}>
          <NavLink to="/login" style={linkStyle} className="headerLink">
            Login
          </NavLink>
          <NavLink to="/contacts" style={linkStyle}className="headerLink">
            My Contacts
          </NavLink>
          <NavLink to="/newdonorform" style={linkStyle}className="headerLink">
            Add New Donor
          </NavLink>
          <NavLink to="/mission" style={linkStyle}className="headerLink">
            Our Mission
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
