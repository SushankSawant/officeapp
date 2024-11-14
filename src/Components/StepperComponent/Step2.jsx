import React from "react";
import { useStepperContext } from "../../Context/StepperContext";

const Step2 = () => {
  const { formDetail, handleChange } = useStepperContext();

  return (
    <div className="firstStep">
      {/* <h1>SECOND STEP</h1> */}
      <label htmlFor="city">City</label>
      <input
        type="text"
        name="address"
        id="city"
        value={formDetail["address"].city}
        placeholder="Enter Text Here"
        onChange={handleChange}
      />
      <label htmlFor="country">Country</label>
      <input
        type="text"
        name="address"
        id="country"
        value={formDetail["address"].country}
        placeholder="Enter Text Here"
        onChange={handleChange}
      />
    </div>
  );
};

export default Step2;
