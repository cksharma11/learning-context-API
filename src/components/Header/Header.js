import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">All Task</NavLink>
      </li>
      <li>
        <NavLink to="/completed">Completed</NavLink>
      </li>
      <li>
        <NavLink to="/pending">Pending</NavLink>
      </li>
    </ul>
  );
};

export default Header;
