import React from "react";

function RadioComponent({ name, checked, radioChange }) {
  return (
    <div className="genderInput">
      <input
        type="radio"
        name="gender"
        id={name}
        // value={detail.gender.includes("male")}
        checked={checked /* detail.gender === "male" */}
        onChange={
          radioChange /* (e) => {
            setDetail((prev) => ({ ...prev, gender: e.target.id }));
            } */
        }
        required
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default RadioComponent;
