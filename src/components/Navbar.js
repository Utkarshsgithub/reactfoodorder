import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1 className='logo'>Bhojan</h1>
        <ul class="remove-list-style">
            <li><Link className='remove-link-style' to='/'>Home</Link></li>
            <li><Link className='remove-link-style' to='/cart'>Cart<i class="fa-solid fa-cart-shopping"></i></Link></li>
        </ul>
    </nav>
  )
}
