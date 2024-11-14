import React from "react";
import Features from "./FeaturepageComponent/Features";
import { Xyz } from "./Newspage";

function Featurepage() {
  return (
    <div className="featuresSection" id="features">
      <h1 className="sectionHead">Features</h1>
      <div className="featureContent">
        <Features featImg={"src/BlueTrading Images/lamp.png"} />
        <Features featImg={"src/BlueTrading Images/evolution.png"} />
        <Features featImg={"src/BlueTrading Images/currency.png"} />
      </div>
      <Xyz />
    </div>
  );
}

export default Featurepage;
