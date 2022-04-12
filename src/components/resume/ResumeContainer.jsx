import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./resumeContainer.css";
import { motion } from "framer-motion/dist/framer-motion";
import ResumeEng from "../../assets/documents/DianaChavezResumeEng.pdf";
import ResumeSpa from "../../assets/documents/DianaChavezResumeSpa.pdf";
import resume from "../../assets/images/DianaChavezresumeEng.png";
import Logo from "../logo/Logo";
import { useTranslation } from "react-i18next";

const ResumeContainer = (props) => {
  const [t, i18n]= useTranslation("global");
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
     
      <div className="resumeContainerGral">
      <Logo />

      <p className="resumeContainerGralParagraph">{t("resumeContainer.paragraph")}</p>

 

      {/*Front card Begining*/}
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        flipSpeedBackToFront="1"
        flipSpeedFrontToBack="1"
      >
        <motion.div
          className="resumeContainerContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, marginTop: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <motion.div
            className="resumeContainerBox"
            transition={{ type: "spring", stiffness: 500 }}
          >
            <motion.button
              className="resumeContainerbtnSee"
              onClick={handleClick}
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(128,0,128)",
                boxShadow: "0px 0px 8px rgb(128,0,128)",
                textDecoration: "none",
                originY: 0,
              }}
              transition={{ type: "spring", stiffness: 500 }}
            >
             {t("resumeContainer.btnPreview")}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.div
            className="resumeContainer2"
            /*     whileHover={{scale:1.1, color:'yellow', originY:0}}
                transition={{type:'spring', stiffness:500}} */
          >
            {/*Front card End*/}

            {/*Back card Begining*/}
            <div className="resumeContainer2Box">
              <h3 className="resumeContainer2Title">RESUME</h3>
              <p className="resumeContainer2Paragraph">
              {t("resumeContainer.paragraph2")}
              </p>

              <img src={resume} alt="" className="resumeContainer2Img" />
            
            </div>
            <div className="resumeContainer2Buttons">
              <motion.button
                className="resumeContainer2btnBack"
                onClick={handleClick}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgb(128,0,128)",

                  boxShadow: "0px 0px 8px rgb(128,0,128)",
                  textDecoration: "none",
                  originY: 0,
                }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                 {t("resumeContainer.btnGoBack")}
              </motion.button>

              <motion.a
                className="resumeContainer2btnDownload"
                href={ResumeEng}
                target="_blank"
                download="DianaChavez-resume.pdf"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgb(128,0,128)",

                  boxShadow: "0px 0px 8px rgb(128,0,128)",
                  textDecoration: "none",
                  originY: 0,
                }}
                transition={{ type: "spring", stiffness: 500 }}
                download
              >
                 {t("resumeContainer.btnDownloadEng")}
              </motion.a>
              <motion.a
                className="resumeContainer2btnDownload"
                href={ResumeSpa}
                target="_blank"
                download="DianaChavez-resume.pdf"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgb(128,0,128)",

                  boxShadow: "0px 0px 8px rgb(128,0,128)",
                  textDecoration: "none",
                  originY: 0,
                }}
                transition={{ type: "spring", stiffness: 500 }}
                download
              >
                 {t("resumeContainer.btnDownloadSpa")}
              </motion.a>

            </div>
          </motion.div>
        </motion.div>

        {/*Back card End*/}
      </ReactCardFlip>
      </div>
    </>
  );
};

export default ResumeContainer;
