import React, { ReactNode } from 'react'
interface LogoProps {
    icon: ReactNode;
}

const Logo: React.FC<LogoProps> = ({icon}) => {
  return (
    <div>
        {icon}
    </div>
  )
}

export default Logo