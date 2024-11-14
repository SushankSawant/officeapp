import React from "react";

function Features({ featImg }) {
  return (
    <div className="features">
      <div className="featureImage">
        <img src={featImg} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor
      </p>
    </div>
  );
}

export default Features;
