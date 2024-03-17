import "./App.scss";
import SideBarMenu from "./component/SideBarMenu/SideBarMenu";
import Header from "./component/Header/Header";
import { useEffect, useState } from "react";
// import MainContent from "./component/MainContent/MainContent";
import Footer from "./component/Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
// import Hemi from './pages/Hemi/Hemi'
// import Fotogallerie from "./pages/Fotogallerie/Fotogallerie"
// import UberUns from "./pages/Uberuns/UberUns";
// import NotFound from "./pages/NotFound/NotFound";
// import Signup from "./pages/Signup/Signup";
// import Login from "./pages/Login/Login";
// import Home from "./pages/Home/Home";
import Router from "./Routers/Router";
function App() {
  const listData = [
    { to: "/Hemi", text: "Hemi", className: "firstChild" },
    { text: "Unsere Schule", options: ["Option 1", "Option 2", "Option 3"] },
    { text: "Unsere Klassen", options: ["Option 4", "Option 5", "Option 6"] },
    { to: "/fotogallerie", text: "Fotogallerie" },
    { to: "/uberuns", text: "Über uns" },
  ];
  const listDataLoggedIn = [
    { to: "/Aktuelines", text: "Aktuelines", className: "firstChild" },
    { to: "#", text: "ternine", className: "Second-item" },
    { text: "Unsere Schule", options: ["Option 1", "Option 2", "Option 3"] },
    { to: "#", text: "bidergolere" },
  ];
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const isLoginOrSignup = pathname === "/login" || pathname === "/signup";
  const [isLogin, setIsLogin] = useState(null);   //This  islogi  state will keep track of whether the user is logged in or not.
  // isLogin state is initialized with a value of null. This means the application doesn't know whether the user is logged in or not initially.
  console.log(isLogin, "asdhfkhasdf");

  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin") == "true" ? true : false);
  }, [localStorage.getItem("isLogin")]);
  console.log(typeof isLogin, "isLoginisLogin");
  return (
    <div className="Wrapper_Container">
      {!isLoginOrSignup && (
        <Header
          listData={listData}
          isActive={isActive}
          setIsActive={setIsActive}
          listData={isLogin ? listDataLoggedIn : listData}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      )}
      {!isLoginOrSignup && (
        <SideBarMenu isActive={isActive} setIsActive={setIsActive} />
      )}

      {/* <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/hemi" element={<Hemi />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/fotogallerie" element={<Fotogallerie />} />
        <Route path="/uberuns" element={<UberUns />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<Signup setIsLogin={setIsLogin} />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Router setIsLogin={setIsLogin} />

      {!isLoginOrSignup && <Footer />}
    </div>
  );
}

export default App;

// import "./App.scss";
// import SideBarMenu from "./component/SideBarMenu/SideBarMenu";
// import Header from "./component/Header/Header";
// import { useState } from "react";
// import MainContent from "./component/MainContent/MainContent";
// import Footer from "./component/Footer/Footer";
// import { Route, Routes } from "react-router-dom";
// import Hemi from './pages/Hemi/Hemi'
// import Fotogallerie from "./pages/Fotogallerie/Fotogallerie"
// import UberUns from "./pages/Uberuns/UberUns";
// import NotFound from "./pages/NotFound/NotFound";
// import Signup from "./pages/Signup/Signup";
// import Login from "./pages/Login/Login";
// // import SideMenuTest from "./component/SideBarMenu/SideMenuTest";

// function App() {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div className="Wrapper_Container">
//       <Header isActive={isActive} setIsActive={setIsActive} />
//       <SideBarMenu isActive={isActive} setIsActive={setIsActive} />
//       {/* <SideMenuTest isActive={isActive} /> */}
//       <Routes>

//       <Route path="/" element={<MainContent /> } />
//         <Route path="/hemi" element={<Hemi />} />
//         <Route path="/fotogallerie" element={<Fotogallerie/>}/>
//         <Route path="/uberuns" element ={<UberUns/>}/>
//         <Route path="/login" element ={<Login/>}/>
//         <Route path="/signup" element ={<Signup/>}/>
//         <Route path="*" element={<NotFound/>}/>
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;
