import React,{useState} from 'react'
import Header from '../auth/Header'
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import {LiaItalicSolid} from 'react-icons/lia'
import {FaBold} from 'react-icons/fa'
import {FaUnderline} from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import {Link} from 'react-router-dom'
function Blog() {
  const [title,setTitle]=useState('')
  const [category,setCategory]=useState('');
  const [time,setTime]=useState('');
  const [content,setContent]=useState('');
  const [tags,setTags]=useState('');
  const [post,setpost]=useState(false);
  

  async function Post_blog(){
    const response=await fetch('https://backend-blog-ucbo.onrender.com/blog',
    {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        title:title,
        category:category,
        time:time,
        content:content,
        tags:tags,
      })
    }
    )
    const data=await response.json();
    console.log(data);
    if(response.status===200){
      alert('Blog Posted Successfully')
      setpost(true);
    }
    else{
      alert('Blog not posted , Error occured');
    }
  }
  return (
    <div className='bg-gray-100 w-screen h-[1000px]'>
     <Header/> 
      <div>
        <div className='flex flex-row   justify-center items-center gap-4'>
            <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder="Title" 
            className='w-1/2 border-b-2 text-xl rounded-md p-2 m-4'></input>
            <IoCheckmarkDoneCircleSharp/>
            <LiaItalicSolid/>
            <FaBold/>
            <FaUnderline/>
            <FaImage/>
        </div>
        <div className='md:flex md:flex-row flex flex-col  justify-center gap-10 m-4 text-xl'>
        <div>
        <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
            <option>Category</option>
            <option>General</option>
            <option>World</option>
            <option>Nation</option>
            <option>Business</option>
            <option>Technology</option>
            <option>Entertainment</option>
            <option>Sports</option>
            <option>Science</option>
            <option>Health</option>
            <option>Food</option>
            <option>Personal</option>
            <option>Spirituality</option>
            <option>Others</option>
        </select>
        </div>
        <div >
            <select value={time} onChange={(e)=>{setTime(e.target.value)}}>
                <option>Choose</option>
                <option>Seconds</option>
                <option>Minutes</option>
                <option>Hours</option>
            </select>
        <input value={tags} onChange={(e)=>{setTags(e.target.value)}} type="number" placeholder="Time to read" 
        className='pl-2 ml-3' ></input>  
        </div>
        </div>
        <textarea value={content} onChange={(e)=>{setContent(e.target.value)}} className='w-3/4 h-[400px] m-auto item-center border-b-2 text-xl rounded-md p-2 flex items-center justify-center m-4' placeholder="Write your blog here..."></textarea>      
      </div>
      <div className='flex justify-center items-center m-4'>
      <button onClick={Post_blog} className='text-lg  w-32 text-white bg-blue-400 p-2 rounded-md'>Submit</button>
      {post?(<Link to="/home"><button className='text-lg  w-32 text-white bg-blue-400 p-2 rounded-md ml-3'>Dashboard</button></Link>):(null)}
    </div>
    </div>
  )
}

export default Blog
