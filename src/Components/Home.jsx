import React, { createContext, useEffect } from "react";
import Landpage from "./Landpage";
import Aboutpage from "./Aboutpage";
import Featurepage from "./Featurepage";
import Newspage from "./Newspage";
import Testimonialpage from "./Testimonialpage";
import Joinpage from "./Joinpage";
import Contactpage from "./Contactpage";
import Footer from "./Footer";
import { useState } from "react";
import Navbar from "./Navbar";
import { ThemeProvider } from "../Context/ThemeContext";

function Home() {
  // const [theme, setTheme] = useState("light");

  //WAS NOT WORKING BECAUSE THE LOCAL STORAGE WAS GETTING AFFECTED DUE TO THEME STATE MOUNT//
  /*   useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    /* return () => {
      const currentTheme = localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : null;
      localStorage.setItem("theme", currentTheme);
      console.log(currentTheme);
    }; */
  // }, [theme]); */

  useEffect(() => {
    console.log("WE R IN HOME");
  }, []);

  /*  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    console.log(currentTheme, typeof currentTheme);
    if (currentTheme == "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", currentTheme);
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, []); */

  return (
    <div>
      <Navbar></Navbar>
      {/* <div
        className="theme-toggle"
        onClick={() => {
          setTheme((prev) => {
            let _theme = prev;
            if (_theme === "light") {
              _theme = "dark";
            } else {
              _theme = "light";
            }
            document.documentElement.setAttribute("data-theme", _theme);
            localStorage.setItem("theme", _theme);
            console.log(_theme);
            return _theme;
          });
        }}
      >
        {theme === "light" ? (
          <img src="src\BlueTrading Images\sun.png" alt="" />
        ) : (
          <img src="src\BlueTrading Images\moon.png" alt="" />
        )}
      </div> */}
      <header>
        <Landpage />
      </header>
      <Aboutpage />
      <Featurepage />
      <Newspage />
      {/* {showPopup && <Popup close={closeFnc} />} */}
      <Testimonialpage />
      <Joinpage />
      <Contactpage />
      <Footer />
    </div>
  );
}

export default Home;
