import React, { useEffect, useState } from "react";
import { useStepperContext } from "../../Context/StepperContext";

const Step1 = () => {
  const { formDetail, handleChange } = useStepperContext();

  return (
    <div className="firstStep">
      {console.log("object1")}
      {/* <h1>FIRST STEP</h1> */}
      <label htmlFor="fname">First Name</label>
      <input
        type="text"
        name="personal"
        id="fName"
        placeholder="Enter Text Here"
        value={formDetail.personal.fName}
        onChange={handleChange}
      />
      <label htmlFor="FatherName">Father Name</label>
      <input
        type="text"
        name="personal"
        id="FatherName"
        placeholder="Enter Text Here"
        value={formDetail.personal.FatherName}
        onChange={handleChange}
      />
      <label htmlFor="lName">Last Name</label>
      <input
        type="text"
        name="personal"
        id="lName"
        value={formDetail.personal.lName}
        placeholder="Enter Text Here"
        onChange={handleChange}
      />
    </div>
  );
};

export default Step1;
