import React from "react";
import "./aboutIndex.css";
import { motion } from "framer-motion/dist/framer-motion";
import { useTranslation } from "react-i18next";

const AboutIndex = () => {
  const [t, i18n]= useTranslation("global");
  return (
    <motion.div
      className="aboutIndex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <h3 className="aboutIndexTitle">{t("aboutIndex.aboutMe")}</h3>
      <p className="aboutIndexParagraph">
      {t("aboutIndex.paragraph")}
      </p>
    </motion.div>
  );
};

export default AboutIndex;
