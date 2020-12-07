import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { ReactComponent as Logo } from "./styles/svg/logo.svg";
import styled from "styled-components";
import FetchTaiwanNews from "./components/FetchTaiwanNews";
import FetchCheckboxRadioExample from "./components/FetchCheckboxList";

const Header = styled.header`
  background: #242526;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
`;
const LogoWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  display: inline-block;
`;
const Title = styled.h1`
  display: inline-block;
  padding-left: 1rem;
`;

const FlexUl = styled.ul`
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
  list-style: none;
  li {
    a {
      display: block;
      padding: 1rem;
      color: white;
      font-size: 1.6rem;
    }
  }
`;
const MainWrapper = styled.div`
  font-size: 16px;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #18191a;
  color: #fff;
`;

const ContentNav = styled.nav`
  width: 45vw;

  ul {
    list-style: none;
    li {
      a {
        padding: 1rem;
        display: block;
        font-size: 2rem;
        color: #fff;
      }
    }
  }
`;

const Content = styled.div`
  padding: 1rem;
  min-height: 80vh;
`;

export default function App() {
  return (
    <MainWrapper>
      <Router>
        <Header>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Title>React Truffle</Title>

          <FlexUl>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/github">github</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
          </FlexUl>
        </Header>
        <ContentWrapper>
          <ContentNav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/checkboxlist">Checkbox list</NavLink>
              </li>
              <li>
                <NavLink to="/fetchTaiwanNews">fetch API by useEffect</NavLink>
              </li>
              <li>
                <NavLink to="/sort">Users</NavLink>
              </li>
            </ul>
          </ContentNav>
          <Content>
            <Switch>
              <Route path="/checkboxlist">
                <FetchCheckboxRadioExample />
              </Route>
              <Route path="/fetchTaiwanNews">
                <FetchTaiwanNews />
              </Route>
              <Route path="/sort">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Content>
        </ContentWrapper>
      </Router>
    </MainWrapper>
  );
}

function Home() {
  return <h2>Home</h2>;
}

const propComparator = (propName, bool) => {
  // asc
  if (bool)
    return (a, b) => {
      if (
        !a[propName] ||
        !b[propName] ||
        a[propName] === "" ||
        b[propName] === ""
      )
        return -1;
      if (a[propName].toUpperCase() < b[propName].toUpperCase()) return 1;
      if (a[propName].toUpperCase() > b[propName].toUpperCase()) return 0;
    };

  // desc
  return (a, b) => {
    if (
      !a[propName] ||
      !b[propName] ||
      a[propName] === "" ||
      b[propName] === ""
    )
      return 1;
    if (a[propName].toUpperCase() < b[propName].toUpperCase()) return -1;
    if (a[propName].toUpperCase() > b[propName].toUpperCase()) return 0;
  };
};

function Users() {
  const list = [
    { name: "Luna", fat: true },
    { name: "", fat: true },
    { name: "", fat: true },
    { name: null, fat: true },
    { name: null, fat: false },
    { name: null, fat: false },
    { name: "Test", fat: true },
    { name: "Miou", fat: true },
    { name: "Mimosa", fat: false },
    { name: "Elsa", fat: true },
  ];

  const [sortList, setSortList] = useState(list);
  const [sortName, setSortName] = useState(false);

  useEffect(() => {
    const newList = [].concat(sortList);
    const list = newList.sort(propComparator("name", sortName));
    setSortList(list);
  }, [sortName]);

  return (
    <table>
      <thead>
        <tr>
          <th>
            name{" "}
            <button onClick={() => setSortName((prevState) => !prevState)}>
              sort!
            </button>
          </th>
          <th>fat</th>
        </tr>
      </thead>
      <tbody>
        {sortList.map((item, index) => {
          const { name, fat } = item;
          return (
            <tr key={index}>
              <td>{name}</td>
              <td>{fat ? "true" : "false"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
