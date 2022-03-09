import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1>Bhojan</h1>
        <ul class="remove-list-style">
            <li><Link className='remove-link-style' to='/'>Home</Link></li>
            <li><Link className='remove-link-style' to='/cart'>Cart</Link></li>
        </ul>
    </nav>
  )
}
