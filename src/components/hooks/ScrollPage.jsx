

export const handleScroll = (event) => { 
  
  let deltaYRef = false;
  const currentScrollY = event.deltaY;

  if (currentScrollY > 0 && !deltaYRef) {
    ScrollPage("down");
    deltaYRef = true;
    setTimeout(() => {
      deltaYRef = false;
    }, 700);
  }
  if (currentScrollY < 0 && !deltaYRef) {
    ScrollPage("up");
    deltaYRef = true;
    setTimeout(() => {
      deltaYRef = false;
    }, 700);
  }
};

let currentPage=0;

 const ScrollPage=(value) => { 
        
      console.log('value0',currentPage);
    
    
        if (value == "down" && currentPage === 0) {
          currentPage=1          
          console.log('current1',currentPage);
          return movePage(1);
          
        }
        if (value == "down" && currentPage === 1) {
          currentPage=2
          console.log('current2',currentPage);
          return movePage(2);
        }
        if (value == "up" && currentPage === 2) {
          currentPage=1
          console.log('current1',currentPage);
          return movePage(1);
        }
        if (value == "up" && currentPage === 1) {
          currentPage=0
          console.log('error0',currentPage);
          return movePage(0);
        }
      
}

export const movePage = (page) => {
  console.log('page',page);
  const element = document.getElementById(page);
  if (element) {
    const offset = element.offsetTop;
    window.scroll({
      top: offset,
      behavior: "smooth",
    });
  }
};