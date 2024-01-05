import React, { useState } from 'react'

function Register() {
  const [first_name,setfirst_name]=useState("");
  const [last_name,setlast_name]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  async function registerdata(){
    try{
    const response =await fetch("https://backend-blog-ucbo.onrender.com/register",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({
        first_name,last_name,email,password
      })
    })
    if(response.status===200){
      alert('Registered Successfully');
    }
    else{
      alert('Registration Failed');
    }
  }
catch(err){
  console.log(err);
}
  }
  return (
    <div className='flex flex-col p-4 gap-6'>
    <label className='text-xl font-semibold text-[#333]'>First Name</label>
      <input className='text-xl w-auto bg-gray-100 rounded-sm p-2' type="text" value={first_name} onChange={(e)=>{setfirst_name(e.target.value)}} placeholder='first_name'></input>
      <label className='text-xl font-semibold text-[#333]' >Last Name</label>
      <input className='text-xl w-auto bg-gray-100 rounded-sm p-2' type="text" value={last_name} onChange={(e)=>{setlast_name(e.target.value)}} placeholder='last_name'></input>
      <label className='text-xl font-semibold text-[#333]' >Email</label>
      <input className='text-xl w-auto bg-gray-100 rounded-sm p-2' type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='email'></input>
    <label className='text-xl font-semibold text-[#333]'> Confirm Password</label>
    <input className='text-xl w-auto bg-gray-100 rounded-sm p-2' type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='setpassword..'></input>
    <button className='bg-green-500 text-white w-32 h-12 text-2xl p-2 rounded-full text-center m-auto' onClick={registerdata}>Register</button>
    </div>
  )
}
export default Register