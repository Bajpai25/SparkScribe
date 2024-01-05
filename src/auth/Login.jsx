import React, { useState } from 'react'
import {Link} from 'react-router-dom';
function Login() {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [login,setlogin]=useState(false);
  async function login_data() {
    try {
      const response = await fetch("https://backend-blog-ucbo.onrender.com/login", {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email,
          password
        })
      })
      if (response.status === 200) {
       
        alert("Login successful!");
        setlogin(true);
      } else if (response.status === 400) {
        alert("User not found. Please register.");
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  }
  
  return (
    <div className='flex flex-col m-4 p-4 gap-6 '>
    <label className='text-xl font-semibold text-[#333]'>Email</label>
      <input required className=' text-xl w-auto bg-gray-100 rounded-sm p-2' type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
      <label className='text-xl font-semibold text-[#333]'>Password</label>
      <input required className='w-auto text-xl bg-gray-100 rounded-sm p-2'  type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} ></input>
      <button className='bg-green-500 text-white w-32 h-12 text-xl p-2 rounded-full text-center m-auto' onClick={login_data}>Login</button>
    {login ?(<Link to="/home"><button className='bg-green-500 text-white w-40 h-12 text-xl p-2 rounded-full text-center 
    m-auto' >Dashboard</button></Link>):(null)}
    </div>
  )
}

export default Login