import React from "react";
import "./redes.css";
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import Whatsapp from "../../assets/images/whatsapp.png";
import { motion } from "framer-motion/dist/framer-motion";

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
    },
  },
};

const Redes = () => {
  return (
    <div className="redesContainer">
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
      <a href="https://github.com/dianachavezr" className="" target="_blank">
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
      <a
        href="https://api.whatsapp.com/send?phone==[57][3196569316]&text=Hi, we would like to contact you"
        className=""
        target="_blank"
      >
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
  );
};

export default Redes;
