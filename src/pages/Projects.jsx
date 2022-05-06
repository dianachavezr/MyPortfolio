import React from "react";
import Footer from "../components/footer/Footer";
import AnimatedPage2 from "./AnimatedPage2";
import CardsProjectsContainer from "../components/cardsProjectsContainer/CardsProjectsContainer";

const Projects = () => {
  return (
    <AnimatedPage2>
      <div className="gralContainer">
       <CardsProjectsContainer />
        <Footer />
      </div>
    </AnimatedPage2>
  );
};

export default Projects;
