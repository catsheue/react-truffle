import React, { useRef, useState, useEffect } from "react";

// https://www.youtube.com/watch?v=t2ypzz6gJm0&t=5s

export default function RenderCount() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current}</div>
    </div>
  );
}
