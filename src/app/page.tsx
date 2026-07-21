import Hero from "@/src/components/Hero";
import Projects from "@/src/components/Projects";
import Navbar from "@/src/components/Navbar";
import About from "@/src/components/About";


export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />
      
      <Projects />

    </main>
  )
}