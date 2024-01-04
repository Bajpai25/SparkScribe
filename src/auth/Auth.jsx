import React, { useState,useRef,useEffect } from 'react'
import Header from './Header'
import Login from './Login'
import Register from './Register'
function Auth() {

  const videoref=useRef(null);

  useEffect(()=>{
    if(videoref.current){
      videoref.current.play();
    }
  },[])

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
    <div className=' h-[1200px] w-full'>
        <Header/>
        <div className='relative'>
        <video ref={videoref} 
        src="https://player.vimeo.com/external/434674600.hd.mp4?s=95786e76cc0ac7dcfab1d63e0ee72ebfdaa7e62e&profile_id=174&oauth2_token_id=57447761" 
    className='filter blur-sm bg-cover w-full h-full ' autoPlay loop muted ></video>
       <div className='absolute inset-0 '>
        <h1 className='text-center font-semibold text-3xl text-white font-mono mt-12 mb-20'>"Unleash Your Thoughts: Join the Blogosphere Adventure Today!"</h1>
        <div className='bg-white shadow-xl shadow-gray-500 md:w-[600px] w-[340px] h-auto m-auto mb-12   backdrop-blur-md '>
            <h1 className='text-center p-4 text-3xl font-semibold text-[#333]'>{title[index]}</h1>
            <div>{handle_page()}</div>
            <button className='bg-blue-600 text-xl text-white rounded-full h-12 w-32 m-4' onClick={()=>{index==0?setindex(index+1):setindex(index-1)}}>
              {index==0?("Register"):("Prev")}
            </button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Auth