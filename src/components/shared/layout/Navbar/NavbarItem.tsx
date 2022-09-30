import React from 'react'
interface NavbarItemProps {
	icon: JSX.Element
}

const NavbarItem: React.FC<NavbarItemProps> = ({icon}) => {
  return (
    <div className='nav-item'>{icon}</div>
  )
}

export default NavbarItem;