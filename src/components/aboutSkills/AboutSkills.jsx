import React from 'react'
import './aboutSkills.css'
import LogoChamaleon from "../../assets/images/logo2.png";
import Html from "../../assets/images/html.png";
import Css from "../../assets/images/css.png";
import Js from "../../assets/images/js.png";
import ReactJs from "../../assets/images/reactjs.png";
import Bootstrap from "../../assets/images/bootstrap.png";
import Php from "../../assets/images/php.png";
import MySql from "../../assets/images/mysql.png";

const AboutSkills = () => {
  return (
    <div className='aboutSkillsContainer'>
        <div className="aboutskillsCircleBox">
        <div className="aboutskillsCircle">
        <img src={LogoChamaleon} alt="logochamaleon" className="aboutskillsCircleLogo"/>
        <img src={Html} alt="html" className="aboutskillsCircleHtml"/>
        <img src={Css} alt="html" className="aboutskillsCircleCss"/>
        <img src={Bootstrap} alt="html" className="aboutskillsCircleBoostrap"/>
        <img src={Js} alt="html" className="aboutskillsCircleJs"/>
        <img src={ReactJs} alt="html" className="aboutskillsCircleReact"/>       
        <img src={Php} alt="html" className="aboutskillsCirclePhp"/>
        <img src={MySql} alt="html" className="aboutskillsCircleMySql"/>
        
        </div>
        </div>
        <div className="aboutSkillsMe">
        <h3 className="aboutSkillsMeTitle">About me</h3>
        <p className="aboutSkillsMeParagraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sunt dolore sint qui, id doloribus excepturi, ducimus, in molestias saepe corporis laudantium eius. Similique nihil facilis atque explicabo, magni mollitia.</p>
        </div>
      
    </div>
  )
}

export default AboutSkills
