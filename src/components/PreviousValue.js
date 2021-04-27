import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
// https://www.youtube.com/watch?v=t2ypzz6gJm0&t=5s

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function PreviousValue() {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  });

  return (
    <FlexColumn>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>Previous Value {prevName.current}</div>
    </FlexColumn>
  );
}
