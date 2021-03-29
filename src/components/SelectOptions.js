import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useClickOutside } from "../utils/hooks/useClickOutside";

const InputStyle = styled.input`
  font-size: 1.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
`;
const ClearValue = styled.span`
  color: gray;
  position: absolute;
  right: 1rem;
  top: 0.2rem;
  font-family: Consolas;
  font-size: 2rem;
`;
const Wrapper = styled.div`
  width: 15rem;
  position: relative;
`;
const DropdownBox = styled.div`
  position: absolute;
  background: #fff;
  color: #282c34;
  width: 100%;
  overflow-y: scroll;
  height: 13rem;
`;
const ListItem = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  &:hover {
    background: dodgerblue;
    color: #fff;
  }
`;

const list = [
  { name: "cuteLuna", id: 1 },
  { name: "abc", id: 3 },
  { name: "abc", id: 3 },
  { name: "abc", id: 3 },
  { name: "abc", id: 3 },
  { name: "abc", id: 3 },
  { name: "miou", id: 4 },
  { name: "google", id: 5 },
  { name: "facebook", id: 65 },
];

export default function SelectOptions() {
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleClearValue = (e) => {
    e.stopPropagation();

    setSearchInput("");
  };
  const wrapper = useRef(null);

  useClickOutside(wrapper, () => {
    setIsDropdownOpen(false);
  });
  const textInput = useRef(null);

  return (
    <Wrapper ref={wrapper}>
      <ClearValue
        onClick={(e) => {
          handleClearValue(e);
          setIsDropdownOpen(true);
        }}
      >
        x
      </ClearValue>
      <InputStyle
        ref={textInput}
        onClick={() => setIsDropdownOpen((prevState) => !prevState)}
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {isDropdownOpen && searchInput !== "" && (
        <DropdownBox>
          {list.map(({ name, id }, index) => {
            const regex = new RegExp(searchInput, "gi");
            if (regex.test(name)) {
              return (
                <ListItem
                  key={index}
                  onClick={(e) => {
                    setSearchInput(name);
                    setIsDropdownOpen(false);
                    e.stopPropagation();
                  }}
                >
                  {name}
                </ListItem>
              );
            }
            return null;
          })}
        </DropdownBox>
      )}
      {isDropdownOpen && searchInput === "" && (
        <DropdownBox>
          {list.map(({ name, id }, index) => {
            const regex = new RegExp(searchInput, "gi");
            if (regex.test(name)) {
              return (
                <ListItem
                  key={index}
                  onClick={(e) => {
                    setSearchInput(name);
                    setIsDropdownOpen(false);
                    e.stopPropagation();
                  }}
                >
                  {name}
                </ListItem>
              );
            }
            return null;
          })}
        </DropdownBox>
      )}
    </Wrapper>
  );
}
