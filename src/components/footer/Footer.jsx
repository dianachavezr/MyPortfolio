import React from "react";
import "./footer.css";
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import Whatsapp from "../../assets/images/whatsapp.png";
import LogoChamaleon from "../../assets/images/logo2.png";
import { motion } from "framer-motion/dist/framer-motion";
import { useTranslation } from "react-i18next";


const effectRedes = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      stiffness: 200,
      ease: "easeInOut"
      
    },
  },
};

const Footer = () => {
  const [t, i18n]= useTranslation("global");
  return (
    <>
    <div className="preFooterContainer">
      <div className="preFooterlogo2">
        <motion.img
          src={LogoChamaleon}
          alt="logochamaleon"
          className="logochamaleon"
          initial={{opacity:0}}
          animate={{opacity:1, rotateZ:360, marginTop:0}}
          transition={{delay:1.5, duration:1.5}}
          drag

          //drag constrains to keep image in the page
          dragConstraints={{left:0, top:250, right:-250, bottom:0}}
          dragElastic={2}
        />
      </div>
      <div className="preFooterRedes">
      <a
        href="https://www.linkedin.com/in/diana-chavez-a053441b2/"
        className=""
        target="_blank"
      >
        <motion.img
          src={Linkedin}
          alt="linkedin"
          className="logoLinkedin"
          variants={effectRedes}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.1,
          }}
          
        />
        </a>
         <a href="https://github.com/dianachavezr" className="" target='_blank'>
        <motion.img
          src={Github}
          alt="github"
          className="logoGithub"
          variants={effectRedes}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.1,
          }}
        />
        </a>
              <a href="https://api.whatsapp.com/send?phone==[57][3196569316]&text=Hola me encanto tu porfafolio y quisiera invitarte a que hagas parte de nuestro equipo" className="" target='_blank'>
        <motion.img
          src={Whatsapp}
          alt="whatsapp"
          className="logoWhatsapp"
          variants={effectRedes}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.1,
          }}
        />
        </a>
        
      </div>
    
    </div>
      <div className="footerContainer">
      <p className="footerParagraph">
      {t("footer.footer")}
      </p>
    </div>
    </>
  );
};

export default Footer;
