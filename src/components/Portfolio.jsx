import React, { useEffect, useRef, useState } from 'react'
import MatiasCoronel from '../assets/MatiasCoronel.jpeg'

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const deltaYRef = useRef(false)
    const currentPageRef = useRef(0)   
   
    useEffect(() => {       
      const handleScroll = (event) => {
        const currentScrollY = event.deltaY;        
        if(currentScrollY>0 && currentScrollY<2 && !deltaYRef.current ){           
          scrollPage('down');
          deltaYRef.current=true;
           setTimeout(() => {
              deltaYRef.current=false;
           }, 700);  
        }
        if(currentScrollY<0 && currentScrollY>-2 && !deltaYRef.current ){          
         scrollPage('up');
         deltaYRef.current=true;
          setTimeout(() => {
             deltaYRef.current=false;
          }, 700);       
       } 
        }   

        window.addEventListener('wheel', handleScroll);
        return () => {
          window.removeEventListener('wheel', handleScroll);  
        };
      }, []);
    
      const scrollPage = (value) => {

      const movePage = (page) =>{
          const element = document.getElementById(page);
        if (element) {
          const offset = element.offsetTop;
          window.scroll({
            top: offset,
            behavior:'smooth'
          })

      }
    }
       
        if(value=='down' && currentPageRef.current===0){
            currentPageRef.current=1
            return movePage(1);
        }
        if (value=='down' && currentPageRef.current===1) {
             currentPageRef.current=2
           return movePage(2)
        }
        if(value=='up' && currentPageRef.current===2){
             currentPageRef.current=1;
            return movePage(1)
        }
        if(value=='up'&&currentPageRef.current===1){
            currentPageRef.current=0
             return movePage(0)
        }        
    }

  return (
 <div className="flex ">
    <div className=''>
      <div id={0} className={`page `}>
            <img className='w-[40%] lg:w-[20%] rounded-2xl border-4 border-teal-400' src={MatiasCoronel} alt="foto" />
            <h1 className="text-red-500 font-bold text-3xl p-4">Hi, Im'  Frontend Developer</h1>
      </div>
      
      <div id={1} className={`page   `}>
        <h1 className="text-red-500 text-3xl">Work</h1>
      </div>
      
      <div id={2} className={`page `}>
        <h1 className="text-red-500 text-3xl">Contact</h1>
      </div>
    </div>
      
    </div>  )
}

export default Portfolio