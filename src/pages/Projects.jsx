import React from "react";
import Footer from "../components/footer/Footer";
import PreFooter from "../components/preFooter/PreFooter";
import AnimatedPage2 from "./AnimatedPage2";
import CardsProjectsContainer from "../components/cardsProjectsContainer/CardsProjectsContainer";

const Projects = () => {
  return (
    <AnimatedPage2>
      <div className="gralContainer">
       <CardsProjectsContainer />
        <PreFooter />
        <Footer />
      </div>
    </AnimatedPage2>
  );
};

export default Projects;
