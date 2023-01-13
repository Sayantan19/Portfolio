// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
function App() {
  return (
    <>
      <Jumbotron />
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
