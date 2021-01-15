import React, { useState } from "react";

export default function ControlledComponents() {
  const [checked, setChecked] = useState(false);
  const handleCheck = (e) => {
    console.log(e.target.checked);
    setChecked((prevState) => !prevState);
  };
  return (
    <div className="controlled">
      <input
        type="checkbox"
        id="cheese"
        checked={checked}
        onChange={(e) => handleCheck(e)}
      />
      <label htmlFor="cheese" className="controlled__label">
        Do you like cheese?
      </label>
    </div>
  );
}
