import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/eat">Eat</NavLink>
        <NavLink exact to="/drink">Drink</NavLink>
      </nav>
    );
  }
}

export default NavBar;
