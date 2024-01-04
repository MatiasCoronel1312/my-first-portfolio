import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import Navbar from "./components/navbar"

function App() {
 

  return (
    <div className="flex justify-around flex-col">
    <Navbar/>
    <Portfolio/>
    <Footer/>
      
    </div>
  )
}

export default App
