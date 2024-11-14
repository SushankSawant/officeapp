import React, { useState } from "react";
import Navbar from "./Navbar";

const Table = () => {
  let tableData = {
    label: ["name", "address", "phone", "image"],
    data: [
      {
        name: "Domingo",
        address: "The Villages",
        phone: "+91 (613) 253-6009",
        image: "https://loremflickr.com/200/200?random=1",
      },
      {
        name: "Gina",
        address: "Hattiesburg",
        phone: "+91 (872) 375-3163",
        image: "https://loremflickr.com/200/200?random=5",
      },
      {
        name: "Rudolph",
        address: "Tremblaytown",
        phone: "+91 (746) 760-0828",
        image: "https://loremflickr.com/200/200?random=2",
      },
      {
        name: "Franklin",
        address: "Hauckfield",
        phone: "+91 (519) 950-3376",
        image: "https://loremflickr.com/200/200?random=3",
      },
      {
        name: "Jamie",
        address: "North Alfredaport",
        phone: "+91 (684) 078-9571",
        image: "https://loremflickr.com/200/200?random=4",
      },
      {
        name: "Toby",
        address: "Luraville",
        phone: "+91 (490) 035-3655",
        image: "https://loremflickr.com/200/200?random=6",
      },
      {
        name: "Christina",
        address: "Jacobihaven",
        phone: "+91 (050) 508-3257",
        image: "https://loremflickr.com/200/200?random=7",
      },
      {
        name: "Emily",
        address: "Balistreriboro",
        phone: "+91 (246) 056-2349",
        image: "",
      },
      {
        name: "Neil",
        address: "Kesslerboro",
        phone: "+91 (563) 157-8827",
        image: "https://loremflickr.com/200/200?random=8",
      },
      {
        name: "Opal",
        address: "North Sandraview",
        phone: "+91 (839) 071-6733",
        image: "https://loremflickr.com/200/200?random=9",
      },
      {
        name: "Sushank",
        address: "Lalbaug",
        phone: "+91 2222222222",
        image: "https://loremflickr.com/200/200?random=10",
      },
    ],
  };

  /* let inputStr = "sushank susHank SuShanK one two two three";

  function wordCount(inp) {
    let wordArr = inp.toLowerCase().split(" ");
    let obj = {};
    for (let word of wordArr) {
      obj[word] = obj[word] ? obj[word] + 1 : 1;
    }
    let newObj = Object.entries(obj).sort(([, a], [, b]) => b - a);
    return newObj;
  }
  let result = wordCount(inputStr);
 */
  // const [currInp, setCurrInput] = useState(null);

  let num = 8;
  function inputCheck(num) {
    let gridMulti = 1;
    let grid = 1;

    for (let i = 1; gridMulti < num; i++) {
      gridMulti = i * i;
      grid = i;
    }
    return `[${grid}, ${grid}]`;
  }
  let result = inputCheck(num);

  return (
    <div>
      <Navbar />
      <div className="displayResult">
        <h1>{result}</h1>
        {/* <input
          type="text"
          value={currInp}
          onChange={(e) => setCurrInput(e.target.value)}
        /> */}
        {/* <h1></h1> */}
        {/* <ul>
          {result.map((e, i) => {
            return (
              <li>
                {e[0]} = {e[1]}
              </li>
            );
          })}
        </ul> */}
      </div>
      <div className="tableDisplay">
        <table>
          <thead>
            <tr>
              <th>Serial No.</th>
              {/* <th>Serial No.</th> */}
              {tableData.label.map((e, i) => {
                return <th>{e}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.data.map((el, i, arr) => {
              return (
                <tr className="eleDATA">
                  <td>{arr.length - i}</td>
                  {tableData.label.map((tdEl, tdI) => {
                    return (
                      <td>
                        {tdEl === "image" ? (
                          <img
                            src={
                              el[tdEl] == ""
                                ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                : el[tdEl]
                            }
                          />
                        ) : (
                          el[tdEl]
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {/* <tr>
            <td>1</td>
            <td>11</td>
            <td>112</td>
            <td>1123</td>
          </tr> */}
          </tbody>
        </table>
      </div>
      <hr />
    </div>
  );
};

export default Table;
