import React from "react";
import "./pages.css";
import Footer from "../components/footer/Footer";
import AboutSkills from "../components/aboutSkills/AboutSkills";
import PreFooter from "../components/preFooter/PreFooter";
import AnimatedPage1 from "./AnimatedPage1";

const About = () => {
  return (
    <AnimatedPage1>
    <div className="gralContainer">
      <AboutSkills />
      <PreFooter />
      <Footer />
    </div>
    </AnimatedPage1>
  );
};

export default About;
