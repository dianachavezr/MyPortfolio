import React from "react";
import AnimatedPage from "./AnimatedPage";
import ResumeContainer from "../components/resume/ResumeContainer";
import Footer from "../components/footer/Footer";
import PreFooter from "../components/preFooter/PreFooter";

const Resume = (resume) => {
  return (
    <AnimatedPage>
      <div className="gralContainer">
        <ResumeContainer />
        <PreFooter />
        <Footer />
      </div>
    </AnimatedPage>
  );
};

export default Resume;
