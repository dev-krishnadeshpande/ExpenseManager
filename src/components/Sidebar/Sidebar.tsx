import React from "react";
import { NavLink } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiSmile } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <ul className="list">
      <li className="list-item">
        <NavLink to="/">
          <AiFillHome size={25} />
          <div>Dashboard</div>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/add">
          <BiAddToQueue size={25} />
          <div>Add Expense</div>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/search">
          <BiSearch size={25} />
          <div>Search Expense</div>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/profile">
          <BiSmile size={25} />
          <div>Profile</div>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/logout">
          <BiLogOut size={25} />
          <div>Logout</div>
        </NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;
