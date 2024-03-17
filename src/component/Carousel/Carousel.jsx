
import "./Carousel.scss";
import Button from "../Button/Button";

const Carousel = () => {
  return (
    <div className="carouselContainer">
      {/* heading */}
      <div className="heading">
         <div className="hozizontalLine"></div>
         <h2>Neueste Fotogalerie</h2>
         <div className="hozizontalLine"></div>
         </div>
      {/* img container */}
      <div className="imgContainer">
        <div className="imageBox">
          <img src="/public/Group 104.png" alt="" />
        </div>
        <div className="imageBox">
          <img src="/public/Group 105.png" alt="" />
        </div>
        <div className="imageBox">
          <img src="/public/Group 106.png" alt="" />
        </div>
      </div>
{/* 
      {/* button */}
      <div className="carouselFooter">
        <Button btn={"Mehr Sehen >>"} className="quaternary"/>
      </div> 
    </div>
  );
};

export default Carousel;
