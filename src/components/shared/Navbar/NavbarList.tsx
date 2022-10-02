import React from "react";
import { GiCarKey, GiCarWheel, GiHomeGarage, GiStrong } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import "./navbar.css";

const NavbarList = () => {
  const navLinkDetails = [
    {
      path: "/",
      icon: <GiHomeGarage />,
      text: "Accueil",
    },
    {
      path: "/customers",
      icon: <GiStrong />,
      text: "Utilisateurs",
    },
    {
      path: "/vehicles",
      icon: <GiCarWheel />,
      text: "Véhicules",
    },
    {
      path: "/locations",
      icon: <GiCarKey />,
      text: "Locations",
    },
  ];
  return (
    <nav className="main_nav">
      <ul className="item-nav">
        {navLinkDetails.map((navlink, i) => {
          return (
            <li key={i}>
              <NavLink
                to={navlink.path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <div className="test">
                  <NavbarItem icon={navlink.icon} key={navlink.path} />
                  {navlink.text}
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavbarList;
