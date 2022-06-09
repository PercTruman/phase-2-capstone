import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar({}) {
  return (
    <div>
      <header>
        <h1>Easy Money: Finally, A Fundraiser That Works As Hard As You Do</h1>
        <nav>
          <NavLink to="/login" className="headerLink">Login</NavLink>
          <NavLink to="/mycontacts" className="headerLink">My Contact</NavLink>
          <NavLink to="/newdonorform" className="headerLink">Add New Donor</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default NavBar