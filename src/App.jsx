import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";
import Formpage from "./Components/Formpage";
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import { createContext } from "react";
import Loginpage from "./Components/Loginpage";
import { ThemeProvider, useThemeContext } from "./Context/ThemeContext";
import { useLoginContext } from "./Context/LoginContext";
import Stepper from "./Components/Stepper";
import Table from "./Components/Table";

function App() {
  const { theme, setTheme, toggleTheme } = useThemeContext();
  console.log(theme);
  const { isLoggedIn, setIsLoggedIn, setUserName } = useLoginContext();
  // const [theme, setTheme] = useState("light");
  // const navigate = useNavigate();

  useLayoutEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    const currLogin = localStorage.getItem("login");
    const currUsername = localStorage.getItem("username");

    //theme
    if (currentTheme == "light") {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", currentTheme);
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
    console.log(theme, "INITIAL THEME");

    //auth
    if (currLogin == "true") {
      setIsLoggedIn(true);
      setUserName(currUsername);
    } else setIsLoggedIn(false);
    // navigate("/");
  }, []);

  /* useEffect(() => {
    const loginStatus = localStorage.getItem("login");
    setIsLoggedIn(loginStatus);
    console.log(loginStatus, "..1.2");
  }, []);
 */
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const currLogin = localStorage.getItem("login");
  //   setIsLoggedIn(currLogin);
  //   console.log(currLogin, "CURRLOGIN APP");
  //   /* if(currLogin){

  //     // navigate("/");
  //   } */
  // }, []);

  return (
    <>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? (
          <img src="src\BlueTrading Images\sun.png" alt="" />
        ) : (
          <img src="src\BlueTrading Images\moon.png" alt="" />
        )}
      </div>

      {/* {isLoggedIn && (
        <div
          className="theme-toggle2"
          onClick={() => {
            setIsLoggedIn((prev) => !prev);
            localStorage.setItem("login", !isLoggedIn);
          }}
        >
          <p>LOGOUT</p>
        </div>
      )} */}
      {/* <LoginContext.Provider value={[isLoggedIn, setIsLoggedIn]}> */}
      {/* {isLoggedIn && <Navbar />} */}
      {/* <ThemeContext.Provider value={theme}> */}
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/Loginpage"
            element={
              // <Loginpage />
              isLoggedIn ? <Navigate to="/" /> : <Loginpage />
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/Formpage" element={<Formpage />} />
          <Route path="/Stepper" element={<Stepper />} />
          <Route path="/Table" element={<Table />} />
        </Routes>
      </BrowserRouter>
      {/* </ThemeContext.Provider> */}
      {/* </LoginContext.Provider> */}
    </>
  );
}

export default App;
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/Formpage",
    element: <Formpage />,
  },
]);
 */
