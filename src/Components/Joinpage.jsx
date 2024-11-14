import React, { useState } from "react";
import Popup from "./Popup";

function Joinpage() {
  const [showPopup, setShowPop] = useState(false);

  function showFnc(e) {
    e.preventDefault();
    setShowPop(!showPopup);
  }

  function closeFnc() {
    setShowPop(!showPopup);
  }

  return (
    <div className="joinSection">
      {showPopup && (
        <Popup title={"Ad. Title"} close={closeFnc} show={showPopup} />
      )}
      <h1>Join our newsletter to stay updated</h1>
      <form action="">
        <input type="text" name="" placeholder="Your email address" id="" />
        <button onClick={showFnc}>Join Newsletter</button>
      </form>
    </div>
  );
}

export default Joinpage;
