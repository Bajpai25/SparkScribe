import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
function Header() {
  const [click,setclick]=useState(false);
  const handleclick=()=>{
    setclick(!click);
  }

  return (
    <div className='md:flex md:flex-row flex flex-col gap-6 justify-between flex-wrap p-4 bg-[#333]'>
    <div className='flex flex-row justify-between '>
    <Link to="/home"><h1 className='text-4xl font-bold text-white '>SparkScribe</h1></Link>
    <RxHamburgerMenu className='md:hidden text-4xl text-white' onClick={handleclick}/>
    </div>
    {click?(<div className='flex flex-col gap-6 text-white font-semibold text-2xl'>
        <Link to="/"><h1>Login</h1></Link>
        <Link to="/"><h1>Register</h1></Link>
        <Link to="/blog"><h1>Create Blog</h1></Link>
        </div>):(
          null
        )}
        <div className='md:flex md:flex-row hidden  justify-evenly gap-6 text-white font-semibold text-2xl'>
          <Link to="/"><h1>Login</h1></Link>
          <Link to="/"><h1>Register</h1></Link>
          <Link to="/blog"><h1>Create Blog</h1></Link>
          </div>
    </div>
  )
}

export default Header