import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Step1 from "./StepperComponent/Step1";
import Step2 from "./StepperComponent/Step2";
import Step3 from "./StepperComponent/Step3";
import { useStepperContext } from "../Context/StepperContext";

const Stepper = () => {
  const [currStep, setCurrStep] = useState(1);
  const { formDetail, handleChange, setFormDetail } = useStepperContext();

  /* function storeInLocal() {
    let stringObj = JSON.stringify(formDetail);
    localStorage.setItem("userDet", stringObj);
  } */
  useEffect(() => {
    const localDet = localStorage.getItem("userDet");
    const parseLocal = JSON.parse(localDet);
    setFormDetail(parseLocal);
    parseLocal && setFormDetail(parseLocal);
    const localStep = Number(localStorage.getItem("currStep"));
    setCurrStep(localStep);

    console.log("hiiiiisass");
  }, []);

  useEffect(() => {
    localStorage.setItem("currStep", currStep);
  }, [currStep]);

  useEffect(() => {
    let stringObj = JSON.stringify(formDetail);
    localStorage.setItem("userDet", stringObj);
  }, [formDetail]);

  const StepperDetails = [
    {
      title: "Personal Info",
    },
    {
      title: "Address",
    },
    {
      title: "Card Details",
    },
  ];

  console.log(currStep);
  //   let ActiveComponent = StepperDetails[currStep - 1]?.component;
  return (
    <div className="stepperholder">
      <Navbar />
      <div className="stepper">
        {StepperDetails.map((e, i) => {
          return (
            <div className="step" key={"step_" + i}>
              {currStep === i + 1 ? (
                <img
                  src="src\BlueTrading Images\pencil.png"
                  className="active"
                />
              ) : (
                <h2 className={currStep > i ? "completed" : ""}>{i + 1}</h2>
              )}
              <p>{e.title}</p>
            </div>
          );
        })}
        {/*  <div className="progressbar">
          <div className="progress"></div>
        </div> */}
      </div>
      <div className="ActiveComponent">
        {(currStep === 1 && <Step1 />) ||
          (currStep === 2 && <Step2 />) ||
          (currStep === 3 && <Step3 />)}
        <div className="stepperBtn">
          {currStep > 1 && (
            <button
              onClick={() => {
                if (currStep <= 1) {
                  setCurrStep(3);
                } else setCurrStep((prev) => prev - 1);
              }}
            >
              Previous
            </button>
          )}
          {currStep === StepperDetails.length ? (
            <button>Finish</button>
          ) : (
            <button
              onClick={() => {
                setCurrStep((prev) => prev + 1);
                // localStorage.setItem("currStep", currStep);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
