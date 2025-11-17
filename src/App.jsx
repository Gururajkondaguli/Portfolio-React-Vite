import Navbar from "./components/Navbar"

import Hero from "./components/Hero"

import Projects from "./components/Projects"
import About from "./components/About"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Perks from "./components/Perks"
// import Ability from "./components/Ability"
import Footer from "./components/Footer"
import Footer1 from "./components/Footer1"

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      {/* <Hero /> */}
      <About />
      <Education />
      <Perks />
      <Projects />
      <Contact />
      <Footer1/>      
      {/* <Ability/> */}
    </div>
  )
}

export default App
