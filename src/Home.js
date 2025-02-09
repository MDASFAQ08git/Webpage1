import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { TiArrowForwardOutline } from "react-icons/ti";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "./Home.scss"
function Home() {

  const[nav,setnav] = useState(true)
  
  const change = () =>{
    setnav(!nav)
  }

  return (
    <div>
      <IoIosArrowDroprightCircle className='icon-arrow' onClick={change} />
      {nav ?
      <nav className='navbar'>
        <lable>Home</lable>
        <lable>About</lable>
        <lable>Add Cart</lable>
        <lable>Login</lable>
        <lable>Register</lable>
      </nav>
      :null}
      {/* <h1>This is my Home</h1>
      <Link to="/">
      <button>Go back to App page</button>
      </Link> */}
    </div>
  )
}

export default Home