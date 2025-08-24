import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <div className="relative min-h-screen bg-white">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;