import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./HeaderStyle.scss";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import UberUns from "../../pages/Uberuns/UberUns";

const Header = ({ isActive, setIsActive, isLogin, listData, setIsLogin }) => {
  const options = ["child1", "child2", "child3"];
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  // useEffect(() => {
  //   if (!islogin) {
  //     navigate("/login");
  //   }
  // }, []);
  //  useEffect(()=>{

  //  })
  const clickHandler = () => {
    if (isLogin === true) {
      localStorage.setItem("isLogin", false);
      console.log("zxxxx , if ha yhe");
      navigate("/");
      setIsLogin(false);
    } else {
      console.log("zxxxx , else ha yhe");
      navigate("/login");
    } // Use navigate to navigate
  };

  const sideMenuToogleHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className="Header_Container">
      <div className="Logo_Header">
        <div className="Logo_header_img">
          <img src="/Group 86.png" alt="logoImg" />
        </div>
      </div>
      <div className="Search_List_Container">
        <div className="top-Container">
          <div className="triangle"></div>
          <div className="search_Container">
            <div className="inputContainer">
              <img src="search 1.png" alt="searchImg" />
              <Input className = "Input_btn" placeholder="Suche hier" />
            </div>
            {/* <div className="vertical-line"></div> */}
            <div className="locationDetails">
              <img src="pin 1.png" alt="locationImg" />
              <p>Schulgasse 2, 2483 Ebreichsdorf</p>
            </div>
            {/* <div className="vertical-line"></div> */}
            <div className="phoneDetails">
              <img src="/phone-call 1.png" alt="" />
              <p>02254 / 725280</p>
            </div>
          </div>
        </div>
        <div className="List_Container" style={{ listStyle: "none" }}>
          {/* <ul>
            <li className="firstChild" >
              <Link to="/Hemi" style={{ color:"#007CB7", textDecoration:"none"}}>Hemi</Link>
            </li>
            <li>
              <div style={{height:"1px",}}>
                <span 
                 onMouseEnter={()=>setIsOpen(true)}
                 onMouseLeave={()=>setIsOpen(false)}
                 style={{cursor:"pointer"}}
                >
                  Umsere Schule <MdArrowDropDown />
                </span>
                {isOpen && (
                  <ul className="drop-down-menu" style={{display:"flex" , flexDirection:"column", width: '150px', backgroundColor:"#064070", color:"white", position:'absolute' , zIndex: '100' 
                  }}>
                    {options.map((item) => (
                      <li   style={{ marginBottom:"2px"}} key={item}>
                        <Link style={{color:"#ffffff" , textDecoration:"none" ,}} to="#">{item}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div style={{height:"1px"}}>
              <span
              onMouseEnter={() => setIsOpen1(true)}
              onMouseLeave={() => setIsOpen1(false)}
              style={{ cursor: 'pointer' }}
            >
              Unsere Klassen <MdArrowDropDown />
            </span>
                {isOpen1 && (
                  <ul className="drop-down-menu" style={{display:"flex" , flexDirection:"column", backgroundColor:"#064070", color:"white" ,width:"150px" , position:"absolute" , zIndex:"100" 
                }}>
                    {options.map((item) => (
                      <li key={item}>
                        <Link style={{color:"#ffffff" , textDecoration:"none" ,}}  to="#">{item}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link to="/fotogallerie" style={{ textDecoration: 'none' ,color:"black", cursor:"pointer" }}>Fotogallerie</Link>
            </li>
            <li>
              <Link to="/uberuns" style={{ textDecoration: 'none' ,color:"black", cursor:"pointer" }}> Über uns</Link>
            </li>
          </ul>  */}

          <ul>
            {listData?.map((item, index) => (
              <li key={index}>
                {item.to ? (
                  <Link
                    to={item.to}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {item.text}
                  </Link>
                ) : (
                  <div>
                    <span
                      onMouseEnter={() =>
                        item.text === "Unsere Schule"
                          ? setIsOpen(true)
                          : setIsOpen1(true)
                      }
                      onMouseLeave={() =>
                        item.text === "Unsere Schule"
                          ? setIsOpen(false)
                          : setIsOpen1(false)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {item.text} <MdArrowDropDown />
                    </span>
                    {item.options &&
                      (item.text === "Unsere Schule" ? isOpen : isOpen1) && (
                        <ul className="drop-down-menu">
                          {item?.options?.map((option, optionIndex) => (
                            <li
                              key={optionIndex}
                              style={{ marginBottom: "2px" }}
                            >
                              <Link
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "none",
                                }}
                                to="#"
                              >
                                {option}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="nav_button">
            {console.log(isLogin, "islogin value")}
            <Button
              btn={isLogin ? "Logout" : "Login / sign-up"}
              className="primary"
              onClick={clickHandler}
            />
          </div>
        </div>
      </div>
      <div className="moblie-menu-icons">
        <IoMenu
          style={{
            marginTop: "4px",
          }}
          size={50}
          color="#007eba"
          onClick={sideMenuToogleHandler}
        />
      </div>
    </div>
  );
};

export default Header;

// import React, { useState } from "react";
// import Input from "../Input/Input";
// import Button from "../Button/Button";
// import "./HeaderStyle.scss";
// import { IoMenu } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { MdArrowDropDown } from "react-icons/md";
// import UberUns from "../../pages/Uberuns/UberUns";

// const Header = ({ isActive, setIsActive }) => {
//   const options = ["Child 1" , "Child 2" , "Child 3"];
//   const[isOpen , setIsOpen] = useState(false);
//   const[isOpen1 , setIsOpen1] = useState(false);
//   const sideMenuToogleHandler = () => {
//     setIsActive((prevState) => !prevState);
//   };
//   return (
//     <div className="Header_Container">
//       <div className="Logo_Header">
//         <img
//           src="/Group 86.png"
//           alt="logoImg"
//           // style={{ display: isActive ? "none" : "block" }}
//         />
//       </div>
//       <div className="Search_List_Container">
//         <div className="top-Container">
//           <img src="/Vector 1.png" alt="vectorimg" className="VectorImg" />
//           <div className="search_Container">
//             <div className="inputContainer">
//               <img src="search 1.png" alt="searchImg" />
//               <Input
//               />
//             </div>
//             <div className="vertical-line"></div>
//             <div className="locationDetails">
//               <img src="pin 1.png" alt="locationImg" />
//               <p>Schulgasse 2, 2483 Ebreichsdorf</p>
//             </div>
//             <div className="vertical-line"></div>
//             <div className="phoneDetails">
//               <img src="/phone-call 1.png" alt="" />
//               <p>02254 / 725280</p>
//             </div>
//           </div>
//         </div>
//         <div className="List_Container">
//           <ul>
//             <li className="firstChild"><Link to="/Hemi">Hemi</Link></li>
//             <li>
//              <div>
//               <li onClick={()=> setIsOpen(!isOpen)} >Umsere Schule <MdArrowDropDown /></li>
//               {isOpen && (
//               <div style={{padding:"4px 0px", height:"1px"   }}>
//                   {options.map((item)=>(
//                     <li className="drop-down-menu" key = {item} style={{ width: "140px" ,padding:"15px 0px" , background: "#064070", color:"#ffffff" , marginbottom:"1px" , textAlign:"center", borderBottom:"1px solid white"
//                   }}>{item}</li>
//                   ))}
//                 </div>
//               )}
//              </div>
//             </li>
//             <li>
//             <div>
//               <li onClick={()=> setIsOpen1(!isOpen1)}>Unsere Klassen <MdArrowDropDown /></li>
//               {isOpen1 && (
//                 <div style={{height: "1px" , padding:"4px 0px"}}>
//                   {options.map((item)=>(
//                     <li className="drop-down-menu" key = {item} style={{width: "140px" ,padding:"15px 0px" , background: "#064070", color:"#ffffff" , marginbottom:"1px" , textAlign:"center", borderBottom:"1px solid white" }}>{item}</li>
//                   ))}
//                 </div>
//               )}
//              </div>

//               </li>
//             <li><Link to = "/fotogallerie" style={{ textDecoration: 'none' ,color:"black", cursor:"pointer" }}>Fotogallerie</Link></li>
//             <li><Link to = "/uberuns" style={{ textDecoration: 'none' ,color:"black", cursor:"pointer" }}> uber uns</Link></li>
//             <Button btn={"Kontaktiere uns"} className="primary" />
//           </ul>

//         </div>
//       </div>
//       <div className="moblie-menu-icons">
//         {isActive ? (
//           <IoMenu
//           style={{ width: "80px", height: "80px",  paddingRight:"12px", color:"blue"}}
//           onClick={sideMenuToogleHandler}
//         />
//         ) : (
//           <IoMenu
//             style={{ width: "80px", height: "80px", paddingRight:"12px" , color:"blue"}}
//             onClick={sideMenuToogleHandler}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
