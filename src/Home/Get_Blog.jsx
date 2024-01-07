
import react, { useState, useEffect } from 'react';
import { FaClock, FaEdit } from "react-icons/fa";
import { MdPreview, MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function Get_Blog() {
  const [blog_data, setBlog_data] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category,setCategory]=useState('Category');


  async function get_blog_data() {
    try {
      const response = await fetch('https://backend-blog-ucbo.onrender.com/get_blog')
      const data = await response.json();
      setBlog_data(data.data);
    } 
    catch (error) {
      console.error('Error fetching blog data:', error);
      
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    get_blog_data();
  }, []);

  
// delete data 

async function delete_blog(id){
  const response=await fetch('https://backend-blog-ucbo.onrender.com/blog/'+id,{
    method:"DELETE",
  }
  )
  const data=await response.json();
  console.log(data);
  if(response.status===200){
    alert('Blog Deleted Successfully');
    get_blog_data();
  }
}
const filteredBlogs = category !== 'Category' ? blog_data.filter(item => item.category === category) : blog_data;

  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
      <select className='bg-blue-500 text-white rounded-md p-2 m-4 text-lg font-sans w-36' value={category} onChange={(e)=>{setCategory(e.target.value)}}>
            <option value="Category">Category</option>
            <option value="General">General</option>
            <option value="World">World</option>
            <option value="Nation">Nation</option>
            <option value="Business">Business</option>
            <option value="Technology">Technology</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
            <option value="Science">Science</option>
            <option value="Health">Health</option>
            <option value="Food">Food</option>
            <option value="Personal">Personal</option>
            <option value="Spirituality">Spirituality</option>
            <option value="Others">Others</option>
        </select>
        </div>
    <div className='md:flex md:flex-row flex-wrap  flex flex-col justify-evenly gap-6 m-4'>
     
      {isLoading ? ( <p>Loading blog data...</p>):
      (
        filteredBlogs.length > 0 ? (
        filteredBlogs.map((item, id) => (
          <div key={id} className="flex flex-col gap-6 md:w-[400px] w-auto h-auto shadow-md shdow-gray-500 m-6 p-3">
             <h1 className='text-2xl p-4 font-bold font-sans text-gray-400'>{item.title}</h1>
                   <button className='bg-blue-500 text-white text-lg p-2 text-center rounded-md w-32'>{item.category}</button>
                   <div className='flex flex-row gap-3'>
                   <FaClock className='mt-1 '/>
                     <h1> {item.tags} {item.time}</h1>
                     </div>
                   <p className='line-clamp-5 overflow-hidden'>{item.content}</p>
                   <Link to={`/preview/`+item._id} className='text-blue-500 text-xl'>Read more</Link>
                   <div className='flex flex-row gap-6'>
                   <Link to={`/blog_edit/` + item._id}>
                   <button><FaEdit className='h-8 w-8'/></button>
                   </Link>
                   <Link to={`/preview/` +item._id}><button><MdPreview className='h-8 w-8'/></button></Link>
                   <button onClick={()=>{delete_blog(item._id)}}><MdDelete className='h-8 w-8'/></button>
                   </div>
          </div>
          
        ))
      ):(<p>No blogs found</p>)
        )}
    </div>
    </div>
  );
}

export default Get_Blog;


