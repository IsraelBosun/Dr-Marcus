import React from 'react'
import { Link } from "react-router-dom"

const MobileNavLink = ({ link, href}) => {

    const handleClick = (setToggle) => {
        (prev) =>setToggle(!prev)
    }

  return (
    <li className='list-none cursor-pointer mr-8'>
        <Link
        to={href}
        className='font-bold transition-all duration-300'
        onClick={handleClick}
        >
            {link}
        </Link>
    </li>
  )
}

export default MobileNavLink