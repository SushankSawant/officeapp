import React, { useEffect } from "react";

function Popup({ close, title, show }) {
  /*   {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }
 */
  useEffect(() => {
    // console.log("modal-open");
    document.body.style.overflow = "hidden";

    return () => {
      {
        document.body.style.overflow = "auto";
      }
    };
  }, []);
  return (
    <div className="popBack">
      <div className="popup">
        <span className="closeBtn" onClick={close}>
          x
        </span>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          provident ab, vero porro ullam repudiandae.
        </p>
      </div>
    </div>
  );
}

export default Popup;
