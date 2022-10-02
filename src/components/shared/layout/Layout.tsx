import React from 'react'
import NavbarList from '../Navbar/NavbarList';

interface LayoutProps {
	children: JSX.Element;
}


const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className='nav_container'>
        <NavbarList/>
        <div className="children_page__container">
								{props.children}
				</div>
    </div>
  )
}

export default Layout