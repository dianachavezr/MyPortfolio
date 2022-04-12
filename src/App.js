import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navBar/Navbar'
import Index from './pages/Index'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import NoPage from './pages/NoPage'
import { AnimatePresence } from 'framer-motion/dist/framer-motion'




function App() {
  return (

    <BrowserRouter>
    <AnimatePresence  >
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Index/>} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>

    </AnimatePresence >
  </BrowserRouter>


  );
}

export default App;

