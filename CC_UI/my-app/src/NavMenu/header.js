import React from "react";
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <nav>
      <NavLink activeClassName="active" to="/Card">
        Card
      </NavLink> | 
      
    </nav>
  );
}
export default Header;