import React, { useState } from "react";
import "./Aktuelines.scss";
import Input from "../../component/Input/Input";
import Button from "../../component/Button/Button";
import smallicebear from "../../../public/small_icebear-1096468_1280 1.png";
import globe from "../../../public/globe 1.png";
import folder from "../../../public/folder 1.png";
import calender from "../../../public/calendar 1.png";

const Aktuelines = () => {
  const [searchItem, setSearchItem] = useState(null);

  const cardData = [
    {
      id: 1,
      name: "Tiergarten Schonbrun",
      location: "Mittelschule Da Vinci",
      category: "Ferien/Feiertage",
      date: "01.11.2023",
      description:
        "Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt uns...",
    },
    {
      id: 2,
      name: "Ailuropoda melanoleuca",
      location: "Mittelschule Da Vinci",
      category: "Ferien/Feiertage",
      date: "01.11.2023",
      description:
        "Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt uns...",
    },
    {
      id: 3,
      name: "Panthera tigris altaica",
      location: "Mittelschule Da Vinci",
      category: "Ferien/Feiertage",
      date: "01.11.2023",
      description:
        "Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt uns...",
    },
    {
      id: 4,
      name: "Ailurus fulgens",
      location: "Mittelschule Da Vinci",
      category: "Ferien/Feiertage",
      date: "01.11.2023",
      description:
        "Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt uns...",
    },
    {
      id: 5,
      name: "Aptenodytes forsteri",
      location: "Mittelschule Da Vinci",
      category: "Ferien/Feiertage",
      date: "01.11.2023",
      description:
        "Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt uns...",
    },
    {
      id: 6,
      name: "Phascolarctos cinereus",
      location: "Mittelschule Da Vinci",
      category: "Ferien/Feiertage",
      date: "01.11.2023",
      description:
        "Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt uns...",
    },
    {
      id: 7,
      name: "Ailuropoda melanoleuca",
      location: "Mittelschule Da Vinci",
      category: "Ferien/Feiertage",
      date: "01.11.2023",
      description:
        "Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt uns...",
    },
    {
      id: 8,
      name: "Spheniscus humboldti",
      location: "Mittelschule Da Vinci",
      category: "Ferien/Feiertage",
      date: "01.11.2023",
      description:
        "Mit unseren ersten Klassen ging es zu Schulbeginn in den Tiergarten Schönbrunn. Dabei lernten die Schülerinnen und Schüler einiges über die Tierwelt uns...",
    },
  ];
  const [card, setCard] = useState([...cardData]);

  const inputOnChangeHandler = () => {
    console.log("hello");
  };
  return (
    <div className="Aktuelies_Container">
      <div className="Aktuelies_title">
        <h3>Aktuelines</h3>
        <div className="headingzontailLine"></div>
      </div>

      <div className="search_Container">
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="dropdown_options">
            <select className="Dropdown">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="SeachInput_container">
            <img src="\search 1.png" alt="" />
            <Input
              className="Aktuelines_input_box"
              placeholder="Suchbegriff"
              inputOnChange={inputOnChangeHandler}
            />
          </div>
        </div>
        <div className="search_button">
          <Button className="quaternary" btn={"Suchen"} />
        </div>
      </div>

      <div className="card_container">
        {card.map((card) => (
          <div className="card_wrapper" key={card.id}>
            <div className="card">
              <div className="cardImage">
                <img src={smallicebear} alt="card" className="cardimageImg" />
              </div>
              <div className="cardHeading">
                <h4>{card.name}</h4>
                <div className="cardHorizontalLine"></div>
              </div>
              <div className="cardsubdesc">
                <div className="globe">
                  <img src={globe} alt="" />
                  <span>{card.location}</span>
                </div>
                <div className="foldercard">
                  <img src={folder} alt="" />
                  <span>{card.category}</span>
                </div>
                <div className="calendercard">
                  <img src={calender} alt="" />
                  <span>{card.date}</span>
                </div>
              </div>
              <div className="carddescription">
                <p>
                  {card.description} <span>Mehr erfahren</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aktuelines;
