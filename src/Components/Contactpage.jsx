import React, { useState } from "react";
import Popup from "./Popup";

function Contactpage() {
  const [showPopup, setShowPop] = useState(false);

  function showFnc(e) {
    e.preventDefault();
    setShowPop(!showPopup);
  }
  function closeFnc() {
    setShowPop(!showPopup);
  }

  return (
    <div className="contactSection" id="contacts">
      {showPopup && (
        <Popup title={"Details Submited!"} close={closeFnc} show={showPopup} />
      )}
      <h1 className="sectionHead">Contact Us</h1>
      <form action="">
        <div className="nameInp">
          <InputBox labelName={"First Name"} />
          <InputBox labelName={"Last Name"} />
        </div>
        <div className="otherinps">
          <InputBox labelName={"Subject"} />
          {/*  <div className="inputs">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="" id="subject" />
          </div> */}
          <div className="inputs">
            <label htmlFor="Message">Message</label>
            <textarea name="" id="Message"></textarea>
          </div>
        </div>
        <div className="buttons">
          {/* <SVGComponent fill="#000" /> */}

          <p>Empty Fills</p>
          <button onClick={showFnc}>
            Send Message
            <SVGComponent />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contactpage;

const InputBox = (props) => {
  return (
    <div className="inputs">
      <label htmlFor={props.labelName}>{props.labelName}</label>
      <input type="text" name="" id={props.labelName} />
    </div>
  );
};

const SVGComponent = (props) => {
  console.log(props);
  return (
    <svg
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 1.56 1.56"
      enableBackground="new 0 0 52 52"
      xmlSpace="preserve"
      {...props}
    >
      <path d="m0.063 1.335 0.132 -0.489h0.558c0.015 0 0.03 -0.015 0.03 -0.03v-0.06c0 -0.015 -0.015 -0.03 -0.03 -0.03H0.195l-0.129 -0.48C0.063 0.24 0.06 0.231 0.06 0.222c0 -0.021 0.021 -0.042 0.045 -0.039 0.006 0 0.009 0.003 0.015 0.003l1.35 0.555c0.018 0.006 0.03 0.024 0.03 0.042s-0.012 0.033 -0.027 0.039L0.12 1.392c-0.006 0.003 -0.012 0.003 -0.018 0.003 -0.024 -0.003 -0.042 -0.021 -0.042 -0.045 0 -0.006 0 -0.009 0.003 -0.015" />
    </svg>
  );
};
