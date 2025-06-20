import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

let NavbarRoutes = [
    {name: 'About', link:'/about'},
    {name: 'Projects', link:'/projects'},
    {name: 'Resume', link:'/resume'},
    {name: 'Home', link:'/home'},
    {name: 'Contact', link:'/contact'},
 ]


function Navbar() {
    
  return (
    <>
    <div className="outerDiv">
            {
            NavbarRoutes.map(link => (
                <li key={link.name} className="navbar_routes">
                <Link to={link.link}>{link.name}</Link>
                </li>
            ))
            }
    </div>
    
    </>
  )
}

export default Navbar