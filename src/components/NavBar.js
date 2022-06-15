import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";

function NavBar() {
  const titleStyle={
    border: "1px solid yellow",
    width: "100%",
    fontSize: "32px",
    display: "block"
  }
  const linkStyle={
    textDecoration: "none",
    color: "yellow"
  }
  return (
    <AppBar position="static" sx={{height:"6rem"}}>
      <Toolbar>
        <Typography style={titleStyle}variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Easy Money: Finally, A Fundraiser That Works As Hard As You Do
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
