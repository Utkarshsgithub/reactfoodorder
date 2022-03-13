import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function Navbar() {

  const amount = useSelector((state) => state.amount);
  
  return (
    <nav className="navbar">
        <Link className='remove-link-style' to='/'><h1 className='logo'>Bhojan</h1></Link>
        <ul className="remove-list-style">
            <li><Link className='remove-link-style' to='/'>Home</Link></li>
            <li><Link className='remove-link-style' to='/cart'>Cart<span style={{'marginLeft':'5px', 'color':'var(--tirtary-color)'}}>${amount}</span></Link></li>
        </ul>
    </nav>
  )
}
