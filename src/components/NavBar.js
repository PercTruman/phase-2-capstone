import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static" height="6rem">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Easy Money: Finally, A Fundraiser That Works As Hard As You Do
        </Typography>
        <Stack direction="row" spacing={3}>
          <NavLink to="/login" className="headerLink">
            Login
          </NavLink>
          <NavLink to="/contacts" className="headerLink">
            My Contacts
          </NavLink>
          <NavLink to="/newdonorform" className="headerLink">
            Add New Donor
          </NavLink>
          <NavLink to="/mission" className="headerLink">
            Our Mission
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
