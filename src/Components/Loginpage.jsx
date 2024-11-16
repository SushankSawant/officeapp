import React, { useContext, useEffect, useState } from "react";
import InputComponent from "./Formpage Components/InputComponent";
import CheckboxComponent from "./Formpage Components/CheckboxComponent";
import { useNavigate } from "react-router-dom";
// import { LoginContext } from "../App";
import { useLoginContext } from "../Context/LoginContext";

function Loginpage() {
  const {
    isLoggedIn,
    setIsLoggedIn,
    setPassword,
    username,
    setUserName,
    password,
    // Login,
    // Logout,
  } = useLoginContext();
  // console.log(isLoggedIn, "LOGIN");
  /*  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
    });
    */

  const navigate = useNavigate();
  // useEffect(() => {
  //   /* const currLogin = localStorage.getItem("login");
  //   setIsLoggedIn(currLogin);
  //   console.log(currLogin, "CURRLOGIN ON LOGIN MOUNT"); */
  //   if (isLoggedIn) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn]);

  function handleLogin(e) {
    e.preventDefault();
    if (password !== "admin") {
      alert("invalid password");
    } else {
      setIsLoggedIn(true);
      setUserName(username);
      localStorage.setItem("login", true);
      localStorage.setItem("username", username);
      console.log(isLoggedIn, "@ LOGIN PAGE");
      navigate("/");
    }
  }

  const [showPass, setShowPass] = useState(false);
  // let navigate = useNavigate();
  /* function handleLogin(e) {
    e.preventDefault();
    if (userDetail.password !== "admin") {
      alert("invalid password");
    } else {
      setIsLoggedIn((prev) => !prev);
      setUserName(userDetail.username);
    }
    localStorage.setItem("login", isLoggedIn);
    localStorage.setItem("username", userDetail.username);
  }
 */
  return (
    <div className="loginpage">
      <form action="" className="loginbox" onSubmit={handleLogin}>
        <InputComponent
          name={"username"}
          text={username}
          typeInp={"text"}
          sendText={(e) => {
            setUserName(e.target.value);
          }}
        />
        <InputComponent
          name={"password"}
          text={password}
          typeInp={showPass ? "text" : "password"}
          sendText={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="showPass">
          <input
            type="checkbox"
            name="showPass"
            id="showPass"
            onChange={() => setShowPass(!showPass)}
            //   onChange={setShowPass(!showPass)}
            checked={showPass === true}
          />
          <label htmlFor="showPass">Show Password</label>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Loginpage;
