import React from "react";
import "./pages.css";
import Footer from "../components/footer/Footer";
import AboutSkills from "../components/aboutSkills/AboutSkills";
import AnimatedPage1 from "./AnimatedPage1";

const About = () => {
  return (
    <AnimatedPage1>
    <div className="gralContainer">
      <AboutSkills />
      <Footer />
    </div>
    </AnimatedPage1>
  );
};

export default About;
