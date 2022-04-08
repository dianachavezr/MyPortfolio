import React from 'react'
import './redes.css'
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import Whatsapp from "../../assets/images/whatsapp.png";

const Redes = () => {
  return (
    <div className='redesContainer'>
        <img src={Linkedin} alt="linkedin" className="logoLinkedin"/>
        <img src={Github} alt="github" className="logoGithub"/>
        <img src={Whatsapp} alt="whatsapp" className="logoWhatsapp"/>

      
    </div>
  )
}

export default Redes
