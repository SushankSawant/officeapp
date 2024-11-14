import React, { useEffect } from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { LoginContext } from "../App";
import { useLoginContext } from "../Context/LoginContext";

function ProtectedRoute({ children }) {
  // const [getterLogin, setterLogin] = useContext(LoginContext);

  const { isLoggedIn, setIsLoggedIn, setUserName } = useLoginContext();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // const currLogin = localStorage.getItem("login");
  //   // const currUsername = localStorage.getItem("username");

  //   // setIsLoggedIn(currLogin);
  //   // setUserName(currUsername);
  //   console.log(isLoggedIn, "CURRLOGIN PROTECTED ON MOUNT");
  //   if (isLoggedIn) {
  //     navigate("/");
  //   }
  // }, []);

  // console.log(isLoggedIn, "FROM PROTECTED");
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/Loginpage" replace />;
}

export default ProtectedRoute;
