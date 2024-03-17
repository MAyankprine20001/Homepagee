
import "./AboutSection.scss";
import Button from "../Button/Button";

const AboutSection = () => {
  return (
    
    <div className="About_Section">
      <div className="about_section_container">
           <img src="back_to_school_facebook_cover_banner_06 2.jpg" alt="" />
        <div className="About_content_data">
           
          <h2>Sed ut perspiciatis unde</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod 
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="btn">
            <Button btn={"Entdecken Sie die"} className="secondary" />
            <Button btn={"Abenteuerlesung"} className="tertiary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
