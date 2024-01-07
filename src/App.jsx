import Aside from "./components/Aside"
import Portfolio from "./components/Portfolio"
import Navbar from "./components/navbar"

function App() {
 
  return (
    <>
      <Navbar/>
      <div className="flex">
      <Aside/>
      <Portfolio/>
      </div>
    </>
   
  )
}

export default App
