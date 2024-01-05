import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {FaClock} from "react-icons/fa";
import Header from '../auth/Header';

function Preview() {
    const {id}=useParams();
    const [title,settitle]=useState('');
    const [category,setcategory]=useState('');
    const [time,settime]=useState('');
    const [tags,settags]=useState('');
    const [content,setcontent]=useState('');

    async function get_blog_data_by_id(){
        const response=await fetch('https://backend-blog-ucbo.onrender.com/blog/'+id,{
            method:"GET",
            headers:{'Content-Type':'application/json'}
        })
        const data=await response.json();
        settitle(data.data.title);
        setcategory(data.data.category);
        settime(data.data.time);
        settags(data.data.tags);
        setcontent(data.data.content);
    }
    useEffect(()=>{
        get_blog_data_by_id();
    },[]);
  return (
    <div className='h-[1000px]'>
        <Header/>
        <div className=' bg-white flex  m-auto mt-12  md:w-1/2 w-auto flex-col justify-center items-center h-auto shadow-xl 
        shadow-gray-400 rounded-md p-6 '>
      <h1 className='text-center text-3xl text-black  font-bold font-[sans]'>{title}</h1>
      <button className='text-lg bg-gray-200 w-36  text-center text-black rounded-md font-semibold font-sans mt-3 mb-3'>{category}</button>
      <div className='flex flex-row gap-3 mt-8 mb-8'>
        <FaClock className='mt-1 h-6 w-6'/>
        <h1 className='text-xl font-sans font-semibold'>{tags} {time}</h1>
      </div>
      <p className='text-lg text-gray-600 font-light font-serif'>{content}</p>
    </div>
    </div>
  )
}

export default Preview
