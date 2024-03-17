import React from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const navigate = useNavigate();
  const login = localStorage.getItem("isLogin");
  console.log("login", login, typeof login);
  if (login == "true") {
    return <>{props.children}</>;
  } else {
    navigate("/login");
  }
};

export default PrivateRoute;
