import About from "@/components/About";
import Contact from "@/components/Contacts";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
