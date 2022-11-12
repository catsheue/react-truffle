import React, { useState } from "react";
import styled from "styled-components";

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid
    ${(props) => (props.toggle === "up" ? "red" : "white")};
`;
const ArrowButton = styled.div`
  margin-top: 0.3rem;
  width: 0;
  height: 0;
  border-top: 7px solid
    ${(props) => (props.toggle === "down" ? "red" : "white")};
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`;
const SortButtonStyle = styled.button`
  background: none;
  border: none;
`;
export function SortButton() {
  const [toggle, setToggle] = useState();
  const handleSort = () => {
    if (!toggle) {
      setToggle("up");
    } else if (toggle === "down") {
      setToggle("up");
    } else {
      setToggle("down");
    }
  };
  return (
    <SortButtonStyle type="button" onClick={handleSort}>
      <ArrowUp toggle={toggle} />
      <ArrowButton toggle={toggle} />
    </SortButtonStyle>
  );
}
