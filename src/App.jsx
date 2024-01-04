import React from 'react'
import {Routes,Route} from "react-router-dom"
import Auth from './auth/Auth'
import Home from "./Home/Home"
import Blog from './Home/Blog'
import Edit_Blog from './Home/Edit_Blog'
import Preview from './Home/Preview'
function App() {
  return (
    <div className='bg-red h-[1000px] w-full'>
      <Routes>
        <Route path="/" element={<Auth/>}></Route>
        <Route path="/home"  element={<Home/>}></Route>
        <Route path="/blog"  element={<Blog/>}></Route>
        <Route path="/blog_edit/:id" element={<Edit_Blog/>}></Route>
        <Route path="/preview/:id" element={<Preview/>}></Route>
      </Routes>
    </div>
  )
}

export default App