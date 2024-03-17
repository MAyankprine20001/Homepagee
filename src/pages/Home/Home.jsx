import React from 'react'
import "./Home.scss";
import Button from '../../component/Button/Button';
import MiddleSection from '../../component/MiddleAboutSection/MiddleSection';
import smallicebear from "../../../public/small_icebear-1096468_1280 1.png";
import calendar from "../../../public/calendar 1.png"
const Home = () => {
  const carouselItems = [
    {
      id: 1,
      image: smallicebear,
      title: "Tiergarten Schönbrunn",
      date: "01.11.2023",
      description:
        "Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt unserer Erde.",
    },
    {
      id: 2,
      image: smallicebear,
      title: "Tiergarten Schönbrunn",
      date: "01.11.2023",
      description:
        "Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt unserer Erde.",
    },
    {
      id: 3,
      image: smallicebear,
      title: "Tiergarten Schönbrunn",
      date: "01.11.2023",
      description:
        "Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt unserer Erde.",
    },
  ];
  return (
    <div className='homePage'>
      <div className="about_section_container">
        <img src="back_to_school_facebook_cover_banner_061 3.png" alt="" />
        <div className="About_content_data">
          <h2>Mittelschule Da Vinci</h2>
          <div className="btn" style={{ marginBottom: "10px" }}>
            <Button btn={"Die Klassen"} className="secondary" />
            <Button btn={"Die Lehrer"} className="secondary" />

          </div>
          <div className="btn">
          <Button btn={"Alle Termine"} className="tertiary" />
            <Button btn={"Bildergalerie"} className="tertiary" />
          </div>
        </div>
      </div>
      <div className='middlesection' >
        <MiddleSection />
      </div>

      <div className="HomeCarouselSection">
        <div className="Homeheading">
          <div className="HomehozizontalLine"></div>
          <h2>Neueste Fotogalerie</h2>
          <div className="HomehozizontalLine"></div>
        </div>
        <div className="homeCarouselDataContent">
          {carouselItems.map((item) => (
            <div className="carouselItem" key={item.id}>
              <div className="carouselImage">
                <img src={item.image} alt="" />
              </div>
              <div className="carouselContent">
                <div className="carouselTitle">
                  <h4>{item.title}</h4>
                </div>
                <div className="carouselDate">
                  <img src={calendar} alt="" />
                  <p className='datePara'>{item.date}</p>
                </div>
                <div className="carouselPara">
                  <p className='descPara'>{item.description}</p>
                </div>
                <div className="carouselSpan">
                  <span>Mehr erfahren {">>"}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
        <div className="HomecarouselFooter">
          <Button btn={"Mehr Sehen >>"} className="quaternary" />
        </div>
      </div>


    </div>
  )
}

export default Home