import React, { Fragment } from 'react';
import { IconContext } from "react-icons";
interface NavbarItemProps {
	icon: JSX.Element
}

const NavbarItem: React.FC<NavbarItemProps> = ({icon}) => {
  return (
    <Fragment>
      <IconContext.Provider value={{size: "2.5em"}}>
      <div className='nav-item'>{icon}</div>
    </IconContext.Provider>
    </Fragment>
  )
}

export default NavbarItem;