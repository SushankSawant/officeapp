import React from "react";

function Testimonialpage() {
  return (
    <div className="testimonialSection">
      <h1 className="sectionHead">Testimonials</h1>
      <div className="testimonialDisplay">
        <img
          className="leftArrow"
          src="src/BlueTrading Images/arrow.png"
          alt=""
        />
        <div className="testimonial">
          <p className="mainTestimonial">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <div className="authorDetails">
            <p className="author">- Lorem ipsum dolor</p>
            <span>Labore et dolore</span>
          </div>
        </div>
        <img
          className="rightArrow"
          src="src/BlueTrading Images/arrow.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Testimonialpage;
