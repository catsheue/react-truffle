import React, { useState } from "react";

export default function Checked() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        // defaultChecked={true}
        checked={checked}
        onChange={() => setChecked((prevState) => !prevState)}
      />
    </div>
  );
}
