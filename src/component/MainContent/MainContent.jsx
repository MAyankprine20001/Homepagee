// import React from "react";
import AboutSection from "../AboutSection/AboutSection";
import MiddleSection from "../MiddleAboutSection/MiddleSection";
import Carousel from "../Carousel/Carousel";
// import MiddleSectionTest from "../MiddleAboutSection/MiddleSectionTest";
import "./mainContent.scss";
// import AboutTest from "../AboutSection/AboutTest";

const MainContent = () => {
  return (
    <div className="mainWrapper">
      <AboutSection />
      {/* <AboutTest/> */}
      <MiddleSection />
      {/* <MiddleSectionTest/> */}
      <Carousel />
    </div>
  );
};

export default MainContent;
