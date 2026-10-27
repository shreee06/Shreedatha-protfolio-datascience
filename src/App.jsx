import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Playground from './components/Playground'
import { About, Experience, Skills, Contact, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <a className="skip" href="#projects">Skip to projects</a>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Playground />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
