import React from "react";
import { useStepperContext } from "../../Context/StepperContext";

const Step3 = () => {
  const { formDetail, handleChange } = useStepperContext();

  return (
    <div className="firstStep">
      {/* <h1>STEP 3</h1> */}
      <label htmlFor="cardnumber">Card Number</label>
      <input
        type="number"
        name="payment"
        id="num"
        value={formDetail["payment"].num}
        // id="cardnumber"
        placeholder="Enter Text Here"
        onChange={handleChange}
      />
      {/* <label htmlFor="cardname">Cardholder Name</label>
      <input type="text" id="cardname" placeholder="Enter Text Here" /> */}
      <label htmlFor="cvv">CVV</label>
      <input
        type="number"
        name="payment"
        id="cvv"
        value={formDetail["payment"].cvv}
        max={999}
        // id="cvv"
        placeholder="Enter Text Here"
        onChange={handleChange}
      />
    </div>
  );
};

export default Step3;
