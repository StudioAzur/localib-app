import React from 'react'
import NavbarList from './Navbar/NavbarList';

interface LayoutProps {
	children: JSX.Element;
}


const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='nav_container'>
        <NavbarList/>
    </div>
  )
}

export default Layout