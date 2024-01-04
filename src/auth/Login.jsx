import React, { useState } from 'react'

function Login() {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  async function login_data(){
    try{
    const response=await fetch("http://localhost:5000/login",{
      method:'POST',
      headers:{"Content-type":"application/json"},
      body: JSON.stringify({
       email,password
      })
    })
    if(response){
      alert("Login successfull!");
      window.location.href="./home";
    }
    else{
      alert("Kindly register");
    }
  }
  catch(err){
    console.log(err);
  }
  }
  return (
    <div className='flex flex-col m-4 p-4 gap-6'>
    <label className='text-xl font-semibold text-[#333]'>Email</label>
      <input required className=' text-xl w-auto bg-gray-100 rounded-sm p-2' type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
      <label className='text-xl font-semibold text-[#333]'>Password</label>
      <input required className='w-auto text-xl bg-gray-100 rounded-sm p-2'  type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} ></input>
      <button className='bg-green-500 text-white w-32 h-12 text-2xl p-2 rounded-full text-center m-auto' onClick={login_data}>Login</button>
    </div>
  )
}

export default Login