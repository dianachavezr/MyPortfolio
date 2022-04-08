import React from 'react'
import './preFooter.css'
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import Whatsapp from "../../assets/images/whatsapp.png";
import LogoChamaleon from "../../assets/images/logo2.png";

const PreFooter = () => {
  return (
    <div className='preFooterContainer'>
      <div className="preFooterlogo2">
      <img src={LogoChamaleon} alt="logochamaleon" className="logochamaleon"/>
      </div>
      <div className="preFooterRedes">
      <img src={Linkedin} alt="linkedin" className="logoLinkedin"/>
        <img src={Github} alt="github" className="logoGithub"/>
        <img src={Whatsapp} alt="whatsapp" className="logoWhatsapp"/>
      </div>
    </div>
  )
}

export default PreFooter
