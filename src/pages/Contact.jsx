import React from 'react'
import Footer from "../components/footer/Footer";
import FormContact from '../components/formContact/FormContact';
import AnimatedPage3 from './AnimatedPage3';

const Contact = () => {
  return (
    <AnimatedPage3>
    <div className="gralContainer">
      <FormContact />
      <Footer />
    </div>
    </AnimatedPage3>
  )
}

export default Contact
