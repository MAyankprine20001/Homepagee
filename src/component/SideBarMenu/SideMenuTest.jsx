
import Button from "../Button/Button";
import "./SideMenuTest.scss"

const SideMenuTest  = ({ isActive }) => {
    return (
      
      <div
        // className="SideMenu_Header"
        // style={{ display: isActive ? "flex" : "none" }}
        className={isActive ? "SideMenu_Header" : "hidden"}
        // className={isActive ? "SideMenu_Header active" : "hidden"}
      >
         
        <img style={{backgroundColor:"white", width:"100%"}}
          src="/Group 86.png"
          alt="logoimg"
          className="Logo-img"
          // style={{ display: isActive ? "none" : "Logo-img" }}
        />
  
        <div style={{position:"relative"}} className="search-bar">
          <img style={{position:"absolute",marginLeft:"10px"}} src="/search 1.png" alt="search-icons" />
          <input style={{width:"150px"}} type="text"  />
        </div>
  
        <ul>
          <li className="firstChild">Hemi</li>
          <li>Umsere Schule</li>
          <li>Unsere Klassen</li>
          <li>Fotogallerie</li>
          <li>uber uns</li>
          <Button btn={"Kontaktiere uns"} />
        </ul>
  
        <div className="locationDetails">
          <img src="pin 1.png" alt="locationImg" />
          <p>Schulgasse 2, 2483 Ebreichsdorf</p>
        </div>
  
        <div className="phoneDetails">
          <img src="/phone-call 1.png" alt="" />
          <p>02254 / 725280</p>
        </div>
  
      </div>
    );
  };
  
  export default SideMenuTest;
  