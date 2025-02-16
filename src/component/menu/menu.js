import React from 'react'
import { NavLink } from 'react-router-dom'
function Menu () {
  return (
    <ul className='menu_items'>
        <li><NavLink>Works</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
        <li><NavLink>About me</NavLink></li>
    </ul>
  )
}

export default Menu