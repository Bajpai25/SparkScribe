import React,{useState,useEffect} from 'react'
import Header from "../auth/Header" 
import Body from '../Api/Body';
function Home() {
  const data=[
    {id:1,
      img:"./blog1.png",
      content:{ 
        title: "Eloquent Echoes: Unveiling the Power of Words",
        subtitle:"Crafting Connections and Exploring Perspectives Through Language",
    },
    },
    {id:2,
      img:"./blog2.png",
      content:{ 
        title:"Chronicles of Contemplation: Navigating Life's Labyrinth of Ideas" ,
        subtitle: "Diving Deep into the Ocean of Thoughts, One Post at a Time",
    },
    },
    {id:3,
      img:"./blog3.png",
      content:{ 
        title:"Whispers of Wisdom: Embark on a Thought-Provoking Odyssey" ,
        subtitle:"Unearthing Pearls of Insight and Imagination Beneath the Surface",
    },
    },
    {id:4,
      img:"./blog4.png",
      content:{ 
        title: "Scribbles and Insights: Roaming the Landscape of the Mind",
        subtitle: "A Canvas for Articulating Musings, Dreams, and Curiosities",
    },
    },
    {id:5,
      img:"./blog5.png",
      content:{ 
        title:"Reflections Junction: Where Words Converge and Ideas Ignite" ,
        subtitle:"Embarking on a Journey Through Verses, Prose, and Uncharted Territories" ,
    },
    },{
      id:6,
      img:"./blog6.png",
      content:{ 
        title: "ThoughtTrek Hub: Navigating the Cosmos of Creative Cognition" ,
        subtitle: "Stardust of Ideas Illuminating the Path to Discovery and Discernment" ,
    },
    },{
      id:7,
      img:"./blog7.png",
      content:{ 
        title:"Mindscape Musings: Scribbles Across the Spectrum of Thought" ,
        subtitle:"Traversing the Spectrum from Playful Contemplation to Profound Epiphanies" ,
    },
    }
  ]
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
      
        useEffect(() => {
            const sliderImage = document.querySelector('.animate-slide');
            if (sliderImage) {
              sliderImage.style.animation = 'none';
              void sliderImage.offsetWidth; // Trigger reflow
              sliderImage.style.animation = null;
            }
          }, [currentSlideIndex]);
        
          useEffect(() => {
            const interval = setInterval(() => {
              setCurrentSlideIndex((prevIndex) =>
                (prevIndex + 1) % data.length
              );
            }, 3000); // Change slide every 3 seconds
        
            return () => clearInterval(interval);
          }, []);
        
          const currentSlide = data[currentSlideIndex]; 
  return (
    <div>
      <Header/>
      <div className="w-full h-auto relative">
      <div className="slider overflow-hidden">
        <img
          src={currentSlide.img}
          className=" h-auto md:h-[900px] w-full bg-cover animate-slide"
          alt="Background"
        />
        </div>
        <div className="absolute inset-0 h-full w-full bg-green-500 opacity-30"></div>
    <div className="absolute top-0 left-0 md:w-[700px] w-auto h-full flex flex-col  justify-left md:pt-[200px] pl-4 md:pb-80 md:mb-40 text-white">
        <h1 className="text-3xl md:text-6xl pt-8  font-semibold md:mb-12 mb-6 text-left">{currentSlide.content.title}</h1>
        <h2 className="text-xl md:text-4xl font-semibold text-left">{currentSlide.content.subtitle}</h2> 
        <button className='md:text-xl text-lg h-14 w-28 font-semibold md:h-16 md:w-32 rounded-lg bg-white text-[#333] mt-8 ml-4'>Get Started</button>
        </div>
      </div>
      <Body/>
      </div>
  )
}

export default Home
