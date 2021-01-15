import React, { useRef, useState, useEffect } from "react";

// https://www.youtube.com/watch?v=t2ypzz6gJm0&t=5s

export default function PreviousValue() {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  });

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I rendered {prevName.current}</div>
    </>
  );
}
