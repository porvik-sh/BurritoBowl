import Navbar from "@/components/Navbar/Navbar";
import Latestworks from "./../components/Latestworks/Latestworks";
import Contact from "./../components/Contact/Contact";
import Footer from "./../components/Footer/Footer";
import Hero from "./../components/Hero/Hero";
import Journey from "./../components/Journey/Journey";
//import Projects from "./../components/Projects/Projects";
import Skills from "./../components/Skills/Skills";
import MedSkills from "./../components/Medicine/MedSkills";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Journey />
      <MedSkills />
      {/*<Projects />*/}
      <Skills />
      <Latestworks />
      <Contact />
      <Footer />
    </>
  );
}
