import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { ReactComponent as Logo } from "./styles/svg/logo.svg";
import FetchTaiwanNews from "./components/FetchTaiwanNews";
import FetchCheckboxRadioExample from "./components/FetchCheckboxList";
import RenderCount from "./components/RenderCount";
import PreviousValue from "./components/PreviousValue";
import ControlledComponents from "./components/ControlledComponents";
import Users from "./components/Users";
import Checked from "./components/Checked";
import {
  ContentWrapper,
  Header,
  Content,
  ContentNav,
  FlexUl,
  LogoWrapper,
  MainWrapper,
  Title,
} from "./styles/styleConfig";

const routeList = [
  {
    exact: true,
    path: "/",
    text: "Home",
    componentUsed: Home,
  },
  {
    path: "previousValue",
    text: "Previous Value",
    componentUsed: PreviousValue,
  },
  {
    path: "rendercount",
    text: "RenderCount by useRef",
    componentUsed: RenderCount,
  },
  {
    path: "checkboxlist",
    text: "Checkbox list",
    componentUsed: FetchCheckboxRadioExample,
  },
  {
    path: "fetchTaiwanNews",
    text: "fetch API by useEffect",
    componentUsed: FetchTaiwanNews,
  },
  {
    path: "controlled",
    text: "Controlled Components",
    componentUsed: ControlledComponents,
  },
  {
    path: "sort",
    text: "Users",
    componentUsed: Users,
  },
  {
    path: "checked",
    text: "Checked",
    componentUsed: Checked,
  },
];

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
              {routeList.map(({ path, text }) => {
                return (
                  <li key={path}>
                    <NavLink to={path}>{text}</NavLink>
                  </li>
                );
              })}
            </ul>
          </ContentNav>
          <Content>
            <Switch>
              {routeList.map(({ componentUsed, path, exact }) => {
                return (
                  <Route
                    key={path}
                    path={`/${path}`}
                    exact={exact}
                    component={componentUsed}
                  />
                );
              })}
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
