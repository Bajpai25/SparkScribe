import React, { useState } from 'react'
import Header from './Header'
import Login from './Login'
import Register from './Register'
function Auth() {
  function handle_page(){
    if(index===0){
      return(<Login/>)
    }
    else {
      return(<Register/>)
    }
  }

    const [index,setindex]=useState(0);
    const title=["Login","Register"];
  return (
    <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen w-screen h-[1200px] w-full'>
        <Header/>
        <div>
        <h1 className='text-center font-semibold text-3xl text-white font-mono mt-12 mb-20'>"Unleash Your Thoughts: Join the Blogosphere Adventure Today!"</h1>
        <div className='bg-white shadow-xl shadow-gray-500 md:w-[600px] w-[340px] h-auto m-auto mb-12 '>
            <h1 className='text-center p-4 text-3xl font-semibold text-[#333]'>{title[index]}</h1>
            <div>{handle_page()}</div>
            <button className='bg-blue-600 text-xl text-white rounded-full h-12 w-32 m-4' onClick={()=>{index==0?setindex(index+1):setindex(index-1)}}>
              {index==0?("Register"):("Prev")}
            </button>
        </div>
        </div>
    </div>
  )
}

export default Auth