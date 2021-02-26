import React from "react";
import styled from "styled-components";

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  border-bottom: 10px solid white;
`;
const ArrowButton = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid white;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
`;
export function SortButton() {
  return (
    <div>
      <ArrowUp />
      <ArrowButton />
    </div>
  );
}
