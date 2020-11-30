import React, { useEffect, useState } from "react";
import styled from "styled-components";

export function useCheckboxes(defaultCheckboxes) {
  useEffect(() => {
    setCheckboxes(defaultCheckboxes);
  }, [defaultCheckboxes]);
  const [checkboxes, setCheckboxes] = useState(defaultCheckboxes);
  function setCheckbox(index, checked) {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = checked;
    setCheckboxes(newCheckboxes);
  }
  return {
    setCheckbox,
    checkboxes,
  };
}
const Checkbox = styled.input`
  margin: 0px 10px 0px !important;
  cursor: pointer;
`;
const CheckboxLabel = styled.label`
  cursor: pointer;
  display: block;
  font-weight: normal;
`;

const FetchButton = styled.div`
  padding: 1rem;
  background: teal;
  cursor: pointer;
  color: #fff;
`;
export function Checkboxes({ checkboxes, setCheckbox }) {
  return (
    <>
      {checkboxes.map((checkbox, i) => (
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={checkbox.checked}
            onChange={(e) => {
              setCheckbox(i, e.target.checked);
            }}
          />
          {checkbox.name}
        </CheckboxLabel>
      ))}
    </>
  );
}

export default function FetchCheckboxRadioExample() {
  const [list, setList] = useState([]);
  const checkboxes = useCheckboxes(list);

  const getData = async () => {
    try {
      const res = await fetch("https://swapi.dev/api/people/");
      const json = await res.json();
      if (json.results) {
        console.log(json.results);
        setList(json.results);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <FetchButton onClick={() => getData()}>
        Click me to fetch list
      </FetchButton>
      <Checkboxes {...checkboxes} />
      <span>
        Value:
        {checkboxes.checkboxes
          .filter((t) => t.checked)
          .map((checkbox) => checkbox.name)
          .join(", ")}
      </span>
    </div>
  );
}
