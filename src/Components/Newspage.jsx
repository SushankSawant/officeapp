import React, { Component } from "react";
import News from "./News";

function Newspage() {
  return (
    <div className="newsSection">
      <h1 className="sectionHead">Latest News</h1>
      <div className="newsDisplay">
        <News
          NewsImg={
            "src/BlueTrading Images/jurica-koletic-MLLBlDL5bDw-unsplash.png"
          }
        />
        <News
          NewsImg={
            "src/BlueTrading Images/product-school-cd7i9vYIyeY-unsplash.png"
          }
        />
        <News
          NewsImg={
            "src/BlueTrading Images/benjamin-child-GWe0dlVD9e0-unsplash.png"
          }
        />
      </div>
      <div className="indicatorSection">
        <Xyz />
        <Xyz />
        {Xyz()}
        {/* <Xyz text="xyz"></Xyz> */}
      </div>
    </div>
  );
}

export default Newspage;
// const compo = <Xyz />;
export const Xyz = (props) => (
  <div className="indicator">{props && props.text}</div>
);
