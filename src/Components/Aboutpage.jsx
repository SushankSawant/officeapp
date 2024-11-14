import React from "react";

function Aboutpage() {
  return (
    <div className="aboutUs" id="about">
      <h1 className="sectionHead">About Us</h1>
      <div className="aboutContent1">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        </p>
      </div>
      <div className="aboutContent2">
        {[
          {
            title: "+20",
            para: "Lorem Ipsum",
          },
          {
            title: "7",
            para: "Lorem Ipsum",
          },
          {
            title: "2010",
            para: "Lorem Ipsum",
          },
          {
            title: "115",
            para: "Lorem Ipsum",
          },
        ].map((e, i, arr) => {
          return (
            <>
              <div key={i} className="aboutsubcont">
                <h1>{e.title}</h1>
                <p>{e.para}</p>
              </div>
              {i + 1 < arr.length && <hr />}
              {/* {i + 1 === arr.length || <hr />} */}
            </>
          );
        })}
        {/* <div className="aboutsubcont">
          <h1>20+</h1>
          <p>Lorem Ipsum</p>
        </div>
        <hr />
        <div className="aboutsubcont">
          <h1>7</h1>
          <p>Lorem Ipsum</p>
        </div>
        <hr />

        <div className="aboutsubcont">
          <h1>2010</h1>
          <p>Lorem Ipsum</p>
        </div>
        <hr />

        <hr /> */}
      </div>
    </div>
  );
}

export default Aboutpage;
