import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {
  const navLinks = [
    {path: '/', title: 'Home'},
    {path: '/collection', title: 'Collection'},
    {path: '/blog', title: 'Blog'},
    {path: '/contact', title: 'Contact'},
  ]
  return (
    <nav className={`${{containerStyles}}`}>
      {navLinks.map((link)=>(
        <NavLink
        key={link.title}
        to={link.path}
        className={({isActive})=>`${isActive ? 'active-link' : ''} px-3 py-2 rounded-full`}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
