import Hero from "@/src/components/Hero";
import Projects from "@/src/components/Projects";
import Navbar from "@/src/components/Navbar";
import About from "@/src/components/About";
import Footer from "@/src/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Hero />
      <Projects />
      <Footer />

    </main>
  )
}