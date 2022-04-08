import React from 'react'
import Footer from "../components/footer/Footer";
import FormContact from '../components/formContact/FormContact';

import PreFooter from "../components/preFooter/PreFooter";
import AnimatedPage3 from './AnimatedPage3';

const Contact = () => {
  return (
    <AnimatedPage3>
    <div className="gralContainer">
      <FormContact />
      <PreFooter />
      <Footer />
    </div>
    </AnimatedPage3>
  )
}

export default Contact
