import CompanyStrip from "./components/CompanyStrip"
import DesignInto from "./components/DesignInto"
import DesignNext from "./components/DesignNext"
import Events from "./components/Events"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
 
 
 
function App() {
 
  return (
    <>
      <div className="bg-[#ededef]">
      <Navbar />
      <Hero/>
      <CompanyStrip/>
      <Projects/>
      <DesignInto/>
      <DesignNext/>
      <Events/>
      </div>
       <Footer/>
     </>
  )
}

export default App
