import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav'>
      <Link to="/">Home</Link>
      <Link to="Customer_Service">Customer Service</Link>
      <Link to='/About'>About Us</Link>
      <Link >Books</Link>
      <Link >Home and Kitchen</Link>
      <Link >Prime <i className="fa-solid fa-caret-down"></i></Link>
      <Link >Electronics</Link>
    </div>
  )
}

export default Nav