import { Routes, Route } from "react-router-dom";
import MainContent from "../component/MainContent/MainContent";
import Hemi from "../pages/Hemi/Hemi";
import Fotogallerie from "../pages/Fotogallerie/Fotogallerie";
import UberUns from "../pages/Uberuns/UberUns";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Aktuelines from "../pages/Aktuelines/Aktuelines";

const Router = ({ setIsLogin }) => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<MainContent />} /> */}
        <Route path="/" element={<Hemi />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<Signup setIsLogin={setIsLogin} />} />
       
        <Route path="/aktuelines" element={<Aktuelines />} />

        

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
