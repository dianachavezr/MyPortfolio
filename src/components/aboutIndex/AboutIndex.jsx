import React from "react";
import "./aboutIndex.css";
import { motion } from "framer-motion/dist/framer-motion";

const AboutIndex = () => {
  return (
    <motion.div
      className="aboutIndex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <h3 className="aboutIndexTitle">About me</h3>
      <p className="aboutIndexParagraph">
        Hi, my name is Diana Chavez, I am a Full-Stack Developer Jr who is
        looking for new challenges, I am a team worker, adaptable to changes
        with a relevant experience is AGILE and SCRUM metodologies, I also have
        knowledge in different tecnologies of Front-End and Back-End, feel free
        to see some of my projects in this portfolio, thanks for visiting me,
        hope you enjoy...
      </p>
    </motion.div>
  );
};

export default AboutIndex;
