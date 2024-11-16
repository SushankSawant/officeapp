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
  //   if (isLoggedIn) {
  //     navigate("/");
  //   }
  // }, []);

  useEffect(() => {
    const currLogin = localStorage.getItem("login");
    console.log(currLogin, isLoggedIn, "CURRLOGIN PROTECTED ON MOUNT");
  }, []);
  // console.log
  // console.log(isLoggedIn, "FROM PROTECTED");
  if (isLoggedIn) {
    console.log(isLoggedIn, "protected Route logined");
    return children;
  }
  return <Navigate to="/Loginpage" replace />;
}

export default ProtectedRoute;
