import React, { useEffect, useState } from 'react'
import MatiasCoronel from '../assets/MatiasCoronel.jpeg'

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const handleScroll = (event) => {
            if (event.deltaY > 0 ) {
                setCurrentPage(630);
                scrollPage()
              } else if (event.deltaY < 0 ) {
                setCurrentPage(-630);
                scrollPage()
              }else{
                setCurrentPage(0);
                scrollPage()
              }
        };
        
    
        window.addEventListener('wheel', handleScroll);
    
        return () => {
          window.removeEventListener('wheel', handleScroll);
        };
      }, [currentPage]);

      const scrollPage = () => {
        let page = 0;
        if(currentPage>0 && page==0){
            page+630;
        }
        if (currentPage>0 && page>520) {
            page+630;
        }
        if(currentPage<0 && page<631){
            page=0;
        }
        if(currentPage<0&&page>631){
            page+currentPage;
        }
        window.scroll({
            top:`${page}`,
             behavior:'smooth'
          })
          console.log(currentPage, page);
      }

  return (
 <div className="flex ">
    <div className='w-screen'>
        <div className={`page `}>
            <img className='w-[20%] rounded-2xl top-2 sticky z-20 border-4 border-teal-400' src={MatiasCoronel} alt="foto" />
            <h1 className="text-red-500 font-bold text-3xl p-5">Hi, Im'  Frontend Developer</h1>
      </div>
      
      <div className={`page   `}>
        <h1 className="text-red-500 text-3xl">Página 2</h1>
      </div>
      
      <div className={`page `}>
        <h1 className="text-red-500 text-3xl">Página 3</h1>
      </div>
      <div className={`page `}>
        <h1 className="text-red-500 text-3xl">Página 4</h1>
      </div>
    </div>
      
    </div>  )
}

export default Portfolio