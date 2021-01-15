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
import RenderCount from "./components/RenderCount";
import PreviousValue from "./components/PreviousValue";
import ControlledComponents from "./components/ControlledComponents";
import Users from "./components/Users";

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
      font-size: 2rem;
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
  font-size: 1.3rem;
`;

const ContentNav = styled.nav`
  width: 20vw;

  ul {
    list-style: none;
    li {
      a {
        padding: 1rem;
        display: block;

        color: #fff;
      }
    }
  }
`;

const Content = styled.div`
  padding: 1rem;
  min-height: 80vh;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
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
                <NavLink to="/previousValue">Previous Value</NavLink>
              </li>
              <li>
                <NavLink to="/rendercount">RenderCount by useRef</NavLink>
              </li>
              <li>
                <NavLink to="/checkboxlist">Checkbox list</NavLink>
              </li>
              <li>
                <NavLink to="/fetchTaiwanNews">fetch API by useEffect</NavLink>
              </li>
              <li>
                <NavLink to="/controlled">Controlled Components</NavLink>
              </li>
              <li>
                <NavLink to="/sort">Users</NavLink>
              </li>
            </ul>
          </ContentNav>
          <Content>
            <Switch>
              <Route path="/previousValue">
                <PreviousValue />
              </Route>
              <Route path="/rendercount">
                <RenderCount />
              </Route>
              <Route path="/checkboxlist">
                <FetchCheckboxRadioExample />
              </Route>
              <Route path="/fetchTaiwanNews">
                <FetchTaiwanNews />
              </Route>
              <Route path="/sort">
                <Users />
              </Route>
              <Route path="/controlled">
                <ControlledComponents />
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
