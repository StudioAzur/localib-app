import React from "react";
import { GiCarKey, GiCarWheel, GiHomeGarage, GiStrong } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";

const NavbarList = () => {
  const navLinkDetails = [
    {
      path: "/",
      icon: <GiHomeGarage/>,
    },
    {
      path: "/customers",
      icon: <GiStrong/>,
    },
    {
      path: "/vehicles",
      icon: <GiCarWheel/>,
    },
    {
      path: "/locations",
      icon: <GiCarKey/>,
    },
  ];
  return (
    <nav className="main_nav">
      <ul>
        {navLinkDetails.map((navlink, i) => {
          return (
            <li key={i}>
              <NavLink
                to={navlink.path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <NavbarItem icon={navlink.icon} key={navlink.path} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavbarList;
