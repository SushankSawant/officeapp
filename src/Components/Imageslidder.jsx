import React, { useEffect, useState } from "react";

const Imageslidder = () => {
  let images = [
    "https://picsum.photos/seed/img1/500/300",
    "https://picsum.photos/seed/img2/500/300",
    "https://picsum.photos/seed/img3/500/300",
    "https://picsum.photos/seed/img4/500/300",
    "https://picsum.photos/seed/img5/500/300",
    "https://picsum.photos/seed/img6/500/300",
    "https://picsum.photos/seed/img7/500/300",
    "https://picsum.photos/seed/img8/500/300",
    "https://picsum.photos/seed/img9/500/300",
    "https://picsum.photos/seed/img10/500/300",
    "https://picsum.photos/seed/img11/500/300",
  ];
  const [currSlide, setCurrSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeout = null;

  useEffect(() => {
    console.log(currSlide);
    timeout =
      autoPlay &&
      setTimeout(() => {
        nextSlide();
      }, 2500);
    console.log(currSlide);
  });

  function nextSlide() {
    setCurrSlide(currSlide === images.length - 1 ? 0 : currSlide + 1);
    clearTimeout(timeout);
  }
  function prevSlide() {
    setCurrSlide(currSlide === 0 ? images.length - 1 : currSlide - 1);
    clearTimeout(timeout);
  }

  return (
    <div className="slidderWrapper">
      <h1>slider</h1>
      <div
        className="slidder"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeout);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        {images.map((e, i) => {
          return (
            <img
              src={e}
              alt=""
              className={currSlide === i ? "slide" : "slide-hidden"}
            />
          );
        })}
      </div>
      <div className="slideCtrl">
        <img
          src="src\BlueTrading Images\leftArrow.png"
          className="leftArrow"
          alt=""
          onClick={prevSlide}
        />
        <div className="indicators">
          {images.map((e, i) => {
            return (
              <div
                className={
                  currSlide === i ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => {
                  setCurrSlide(i);
                  clearTimeout(timeout);
                  console.log(i);
                }}
              ></div>
            );
          })}
        </div>
        <img
          src="src\BlueTrading Images\leftArrow.png"
          className="rightArrow"
          alt=""
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Imageslidder;
