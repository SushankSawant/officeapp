import React, { useEffect, useState } from "react";
// import Formpage from "./Formpage";
// import { createBrowserRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useLoginContext } from "../Context/LoginContext";
import { Navigate } from "react-router-dom";

function Navbar() {
  /*  const [userName, setUserName] = useState("");
  useEffect(() => {
    const currUsername = localStorage.getItem("username");
    setUserName(currUsername);
  }, []); */
  const {
    isLoggedIn,
    setIsLoggedIn,
    setPassword,
    username,
    setUserName,
    password,
  } = useLoginContext();
  return (
    <nav>
      <a href="/">
        <h1>BlueTrading</h1>
      </a>

      <div className="navBtns">
        <ul>
          <a href="/Table">
            <li>Table</li>
          </a>
          {/*   <a href="#features">
            <li>Features</li>
          </a> */}
          <a href="/Stepper">
            <li>Stepper</li>
          </a>
          <a href="/Formpage">
            <li>Form</li>
          </a>
          <p
            onClick={() => {
              localStorage.setItem("login", false);
              setIsLoggedIn(false);
              navigate("/");
            }}
          >
            {username}
          </p>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
