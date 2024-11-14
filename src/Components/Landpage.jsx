import React, { useState } from "react";

function Landpage() {
  return (
    <div
      className="landPage"
      id="home"
      /* style={{ background: theme === "light" ? "#0864b1" : "#3e3e3e" }} */
    >
      {/* <div className="theme-toggle" onClick={changeTheme}>
        {theme === "light" ? (
          <img src="src\BlueTrading Images\sun.png" alt="" />
        ) : (
          <img src="src\BlueTrading Images\moon.png" alt="" />
        )}
      </div> */}
      <div className="textContent">
        <h1>Invest in the Future of Humanity</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        </p>
      </div>
      <img src="src\BlueTrading Images\Header Vector.png" alt="" />
    </div>
  );
}

export default Landpage;
