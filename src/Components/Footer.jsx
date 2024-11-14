import React from "react";

function Footer() {
  return (
    <footer>
      <div className="left">
        <div className="ltop">
          <h1>BlueTrading</h1>
          <p>
            Keas 69 Str. 15234, East Nile Athens, Greece +249 9123 456 78 +249
            9123 456 78
          </p>
        </div>
        <div className="lbot">
          <p>
            <img
              src="src\BlueTrading Images\svgviewer-png-output (1).png"
              alt=""
            />
            2020 Reserved by BlueTrading Company Limited.
          </p>
        </div>
      </div>
      <div className="right">
        <div className="rtop">
          <p>Stay connected with us</p>
          <div className="icons">
            {[1, 2, 3, 4, 5].map((e, i) => {
              return (
                <div className="single" key={i}>
                  <img
                    src={`src/BlueTrading Images/svgviewer-output (${e}).svg`}
                    alt=""
                  />
                </div>
              );
            })}
            {/*  <div className="single">
              <img
                src="src\BlueTrading Images\svgviewer-output (1).svg"
                alt=""
              />
            </div>
            <div className="single">
              <img
                src="src\BlueTrading Images\svgviewer-output (2).svg"
                alt=""
              />
            </div>
            <div className="single">
              <img
                src="src\BlueTrading Images\svgviewer-output (3).svg"
                alt=""
              />
            </div>
            <div className="single">
              <img
                src="src\BlueTrading Images\svgviewer-output (4).svg"
                alt=""
              />
            </div>
            <div className="single">
              <img
                src="src\BlueTrading Images\svgviewer-output (5).svg"
                alt=""
              />
            </div> */}
          </div>
        </div>

        <div className="rbot">
          <p>
            Made with
            <img
              style={{ paddingLeft: "5px", paddingRight: "5px" }}
              src="src\BlueTrading Images\svgviewer-output (8).svg"
              alt=""
            />
            by Yassin Salih
          </p>
          <span>https://behance.net/yassinsalih96</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
