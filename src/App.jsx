import Background from "@/Background";
import Navbar from "@/Navbar";
import Hero from "@/Hero";
import Skill from "@/Tech";
import Education from "@/Education";
import Work from "@/Work";
import Contact from "@/Contact";
import "./index.css";

function App() {
  return (
    <>
      <Background />

      <main className="main-section">
        <Navbar />
        <Hero />
        <Skill />
        <Education />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default App;
