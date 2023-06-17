import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <Router>
    <div>
    <Home/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
