import React from "react";

function CheckboxComponent({ name, handleLanguage, checked }) {
  return (
    <div className="checkboxInput">
      <input
        type="checkbox"
        name="language"
        onChange={handleLanguage}
        checked={checked /* detail.language.includes(e) */}
        // value={detail.language.includes(e)}
        id={name}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default CheckboxComponent;
