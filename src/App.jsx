import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CaseStudy from './pages/CaseStudy';
import Contact from './pages/Contact';
import './assets/css/plugins.css'; 
import './assets/css/style.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProgressScroll from './components/common/ProgressScroll';
import Loading from './components/common/Loading';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import MenuBar from './components/common/MenuBar';
import MouseCursor from './components/common/MousrCursor';
import Preloader from './components/common/Preloader';

function App() {
  return (
    <Router>
      <Preloader/>
      {/* <Loading/> */}
      <ProgressScroll/>
      <MouseCursor/>
      {/* <Navbar/> */}
      <MenuBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;