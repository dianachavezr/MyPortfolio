import React from "react";
import "./aboutSkills.css";
import LogoChamaleon from "../../assets/images/logo2.png";
import Html from "../../assets/images/html.png";
import Css from "../../assets/images/css.png";
import Js from "../../assets/images/js.png";
import ReactJs from "../../assets/images/reactjs.png";
import Bootstrap from "../../assets/images/bootstrap.png";
import Php from "../../assets/images/php.png";
import MySql from "../../assets/images/mysql.png";
import { motion } from "framer-motion/dist/framer-motion";

const AboutSkills = () => {
  return (
    <motion.div className="aboutSkillsContainer">
      <motion.div
        className="aboutskillsCircleBox"
        drag
        //drag constrains to keep image in the page
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={2}
      >
        <div className="aboutskillsCircle">
          <img
            src={LogoChamaleon}
            alt="logochamaleon"
            className="aboutskillsCircleLogo"
          />
          <img src={Html} alt="html" className="aboutskillsCircleHtml" />
          <img src={Css} alt="html" className="aboutskillsCircleCss" />
          <img
            src={Bootstrap}
            alt="html"
            className="aboutskillsCircleBoostrap"
          />
          <img src={Js} alt="html" className="aboutskillsCircleJs" />
          <img src={ReactJs} alt="html" className="aboutskillsCircleReact" />
          <img src={Php} alt="html" className="aboutskillsCirclePhp" />
          <img src={MySql} alt="html" className="aboutskillsCircleMySql" />
        </div>
      </motion.div>
      <motion.div
        className="aboutSkillsMe"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <h3 className="aboutSkillsMeTitle">About me</h3>
        <p className="aboutSkillsMeParagraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sunt
          dolore sint qui, id doloribus excepturi, ducimus, in molestias saepe
          corporis laudantium eius. Similique nihil facilis atque explicabo,
          magni mollitia.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutSkills;
