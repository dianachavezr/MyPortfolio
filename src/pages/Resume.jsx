import React from "react";
import AnimatedPage from "./AnimatedPage";
import ResumeContainer from "../components/resume/ResumeContainer";
import Footer from "../components/footer/Footer";

const Resume = (resume) => {
  return (
    <AnimatedPage>
      <div className="gralContainer">
        <ResumeContainer />
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Resume;
