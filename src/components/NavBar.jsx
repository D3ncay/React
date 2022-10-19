import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          {" "}
          <NavLink to="posts"> Посты </NavLink>
        </li>
        <li>
          <NavLink to="about">О нас</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
