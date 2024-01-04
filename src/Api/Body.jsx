import React  from 'react';
import {Link} from 'react-router-dom';
import Get_Blog from '../Home/Get_Blog';
function Body() {
    

  return (
    <div>
    <h1 className='text-center mt-12 mb-12 md:text-6xl text-4xl p-4 font-bold font-sans text-[#e09900]'>Daily News and Blog!!</h1>
    <Link to="/blog"><button className='bg-green-400 text-xl p-2 ml-8 rounded-md w-40 text-white font-mono'>+ New Post</button></Link>
    <h1 className='text-center mt-12 mb-12 md:text-6xl text-4xl  font-bold font-sans text-[#e09900]'>Feed!</h1>
    <Get_Blog/>
      </div>
  )
}
export default Body;
