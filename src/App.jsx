import Background from "@/Background";
import Navbar from "@/Navbar";
import Hero from "@/Hero";
import Tech from "@/Tech";
import Project from "@/Project";
import Contact from "@/Contact";
import "./index.css";

function App() {
  return (
    <>
      <Background />

      <main className="main-section">
        <Navbar />
        <Hero />
        <Tech />
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default App;
