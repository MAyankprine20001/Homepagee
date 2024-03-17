import React from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = (props) => {
  const navigate = useNavigate();
  // const login = localStorage.getItem("isLogin");
  const login = localStorage.getItem("isLogin") === "true";
  React.useEffect(() => {
    if (login) {
      navigate("/home");
    }
  }, [login, navigate]);
  return <>{!login && children}</>;
  
  // if (login) {
  //   navigate("/home");
  // } else {
  //   return <>{props.children}</>;
  // }
};

export default PublicRoute;
