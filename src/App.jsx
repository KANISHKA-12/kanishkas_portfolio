import MainLandingPage from "./components/MainLandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Eyes from "./components/Eyes"
import Card from "./components/Card"
import Contact from "./components/Contact"

function App() {

  return (
    <>
      <div className='w-full min-h-screen bg-[#111111] '>
            <Navbar />
            <MainLandingPage />
            <Marquee />
            <About />
            <Eyes />
            <Card />
            <Contact />
          </div>
    </>
  )
}

export default App
