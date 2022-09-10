import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./ui/components/Navbar";

const App = () => {
  return (
    <div className="container mx-auto md:px-10">
      <Navbar />
      <div className="w-full px-5 md:px-24">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
