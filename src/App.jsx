import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="bg-black text-white font-sans">
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
