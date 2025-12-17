import Navbar from "@/components/Navbar/Navbar";
import Papers from "@/components/Medicine/Papers";
import Projects from "./../components/Projects/Projects";
import About from "@/components/About/About";
export default function MedicinePage() {
  return (
    <>
      <Navbar />
      <About />
      <Papers />
      <Projects />
    </>
  );
}
