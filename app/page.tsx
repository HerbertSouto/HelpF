import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Areas from "./components/Areas";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Areas />
        <Projects />
        <Skills />
        <Testimonials />
        <CTA />
      </main>
      <footer className="py-8 border-t border-gray-100 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Ariane Carvalho · São Paulo, SP
      </footer>
    </>
  );
}
