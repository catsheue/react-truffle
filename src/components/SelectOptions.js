import { useCallback, useRef, useState } from "react";
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
  cursor: pointer;
  &:hover {
    color: black;
  }
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
  { name: "abc", id: 2 },
  { name: "green", id: 3 },
  { name: "purple", id: 4 },
  { name: "pink", id: 5 },
  { name: "yellow", id: 5 },
  { name: "miou", id: 7 },
  { name: "google", id: 8 },
  { name: "amazon", id: 9 },
  { name: "facebook", id: 10 },
  { name: "icecream", id: 11 },
  { name: "bubble", id: 12 },
  { name: "microsoft", id: 13 },
  { name: "apple", id: 14 },
  { name: "strawberry", id: 15 },
  { name: "banana", id: 16 },
  { name: "doraemon", id: 17 },
  { name: "12345", id: 18 },
  { name: "67890", id: 19 },
  { name: "euro", id: 20 },
];

export function useSelectBar(callback, deps) {
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleClearValue = (e) => {
    e.stopPropagation();
    setSearchInput("");
  };
  const wrapper = useRef(null);
  const closeCallback = useCallback(() => setIsDropdownOpen(false), []);
  useClickOutside(wrapper, closeCallback);
  const textInput = useRef(null);
  return {
    searchInput,
    setSearchInput,
    isDropdownOpen,
    setIsDropdownOpen,
    handleClearValue,
    wrapper,
    useClickOutside,
    textInput,
  };
}
export default function SelectPanel() {
  const data = useSelectBar();
  return <SelectOptions {...data} />;
}
export function SelectOptions({
  wrapper,
  handleClearValue,
  setIsDropdownOpen,
  textInput,
  searchInput,
  setSearchInput,
  isDropdownOpen,
}) {
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
