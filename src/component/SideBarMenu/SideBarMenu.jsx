import Input from "../Input/Input";
import "./SideBarMenu.scss";

import Button from "../Button/Button";
import {  RxCross1 } from "react-icons/rx";



const SideBarMenu = ({ isActive ,setIsActive }) => {

  console.log(isActive, 'ACT')
  return (
    
    <div
      // className="SideMenu_Header"
      // style={{ display: isActive ? "flex" : "none" }}
      className={`SideMenu_Header ${isActive ? " hidden" : "SideMenu_Header"} `}
      // className={`SideMenu_Header ${isActive ? "active" : "hidden"}`}
    >
      <div style={{display:"flex" , justifyContent:"space-between"}} onClick={()=>setIsActive(!isActive)} className="sidemenu_image">
      <img style={{backgroundColor:"", }}
        src="/logonavbar.png"
        alt="logoimg"
        className="Logo-img"
        // style={{ display: isActive ? "none" : "Logo-img" }}
      />
      <RxCross1 size={45} color="white"   onClick={()=>setIsActive(!isActive)} style={{margin:"12px 20px"}} className="sidemenucrossicons"/>
      </div>
    

      <div style={{position:"relative"}} className="search-bar">
        <img style={{position:"absolute",marginLeft:"10px"}} src="/search 1.png" alt="search-icons" />
        {/* <input style={{width:"150px"}} type="text"  /> */}
        <Input />
      </div>

      <ul>
        <li className="firstChild">Hemi</li>
        <li>Umsere Schule</li>
        <li>Unsere Klassen</li>
        <li>Fotogallerie</li>
        <li>uber uns</li>
        <Button btn={"Kontaktiere uns"}  className="primary"/>
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

export default SideBarMenu;
