import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./cardsProjects.css";
import { motion } from "framer-motion/dist/framer-motion";
import { useTranslation } from "react-i18next";

const CardsProjects = (props) => {
  const [t, i18n]= useTranslation("global");
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      {/*Front card Begining*/}
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        flipSpeedBackToFront="1"
        flipSpeedFrontToBack="1"
      >
        <motion.div
          className="cardsProjecsContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, marginTop: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <motion.div
            className="cardsProjects"
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgb(128,0,128)",
              boxShadow: "0px 0px 8px rgb(128,0,128)",
              textDecoration: "none",
              originY: 0,
            }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <div className="cardsProjectsImgBox">
              <img src={props.img} alt="" className="cardsProjectsImg" />
            </div>
            <h3 className="cardsProjectsTitle">{props.title}</h3>
            <div className="cardsProjectsParagraphBox">
              <p className="cardsProjectsParagraph">{props.description}</p>
            </div>

            <motion.button
              className="btnVer"
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
              {t("cardsProjects.btnSeeMore")}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.div
            className="cardsProjects2"
            /*     whileHover={{scale:1.1, color:'yellow', originY:0}}
                transition={{type:'spring', stiffness:500}} */
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgb(128,0,128)",
              boxShadow: "0px 0px 8px rgb(128,0,128)",
              textDecoration: "none",
              originY: 0,
            }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <h3 className="cardsProjects2Title">{props.title}</h3>
            <div className="cardsProjects2Box">
              <div className="cardsProjects2ParagraphBox">
                <p className="cardsProjects2Paragraph">
                  <span> {t("cardsProjects.cardsProjec2Title")} </span>
                  {props.description2}
                </p>
              </div>
            </div>
            {/*Front card End*/}
            {/*Back card Begining*/}
            <div className="cardsProjects2Box">
              <div className="cardsProjects2ParagraphBox">
                <p className="cardsProjects2Paragraph">
                  <span>{t("cardsProjects.cardsProjects2Languages")}</span>
                  {props.description3}
                </p>

                <p className="cardsProjects2Paragraph">
                  <span>{t("cardsProjects.linkToGithub")} </span>
                  <a href={props.linkGitHub} className="" target="_blank">
                    {props.linkGitHub}
                  </a>
                </p>

                <p className="cardsProjects2Paragraph">
                  <span>{t("cardsProjects.linkToWebPage")} </span>
                  <a href={props.link} className="" target="_blank">
                    {props.link}
                  </a>
                </p>
              </div>
              <div className="cardsProjects2ImgBox">
                <img src={props.img3} alt="" className="cardsProjects2Img" />
              </div>
            </div>
            <div className="cardsProjects2Buttons">
              <motion.button
                className="btnBack"
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
                 {t("cardsProjects.btnGoBack")}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
        {/*Back card End*/}
      </ReactCardFlip>
    </>
  );
};

export default CardsProjects;
