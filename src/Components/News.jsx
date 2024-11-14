import React from "react";

function News({ NewsImg, NewsText }) {
  return (
    <div className="news">
      <img src={NewsImg} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod
      </p>
      <span className="readBtn">
        Read <img src="src\BlueTrading Images\svgviewer-output.svg" alt="" />
      </span>
    </div>
  );
}

export default News;
