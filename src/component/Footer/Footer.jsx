// import { CiPhone } from "react-icons/ci";
// import { CiLocationOn } from "react-icons/ci";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="box_container">
        <div className="box box1">
          <h3 >In Kontakt Kommen</h3>
          <div className="PhoneNo-details">
            <img src="/public/phone-call 2.png" alt="" />
            <p>06767275673</p>
          </div>
          <div className="location-details">
            <img src="/public/location 1.png" alt="" />
            <p>Schulgasse 2, 2483 Ebreichsdorf</p>
          </div>
        </div>
        <div className="box  box2">
          <h3>Quick Links</h3>

          <ul className="list_footer">
            <li>jemi</li>
            <li>unsere schule</li>
            <li>Fotogallerie</li>
            <li>unsere klassen</li>
            <li>Uber uns</li>
          </ul>
        </div>
        <div className="box box3">
          <h3>News Letter</h3>
          <div className="footer_input">
            <input
              type="text"
              placeholder="lhr Name"
              className="input_box_footer"
            />
            <input
              type="text"
              placeholder="Denie E-mail"
              className="input_box_footer"
            />
            <button className="btn-footer">Abonniere jetzt</button>
          </div>
        </div>
      </div>
      <div className="end_footer">
        <p>Impressive</p>
        <p>|</p>
        <p>Privatespace</p>
      </div>
    </footer>
  );
};

export default Footer;
