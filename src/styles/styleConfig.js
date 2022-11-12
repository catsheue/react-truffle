import styled from "styled-components";

export const Header = styled.header`
  background: #242526;
  color: white;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  height: 10vh;
`;
export const LogoWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  display: inline-block;
`;
export const Title = styled.h1`
  display: inline-block;
  padding-left: 1rem;
`;

export const FlexUl = styled.ul`
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
  list-style: none;
  li {
    a {
      display: block;
      padding: 1rem;
      color: white;
      font-size: 1.5rem;
      font-family: monospace;
    }
  }
`;
export const MainWrapper = styled.div`
  font-size: 16px;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #18191a;
  color: #fff;
  font-size: 1.3rem;
  height: 90vh;
`;

export const ContentNav = styled.nav`
  width: 20vw;

  ul {
    list-style: none;
    li {
      a {
        display: block;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        font-family: monospace;
        color: #fff;
        border-bottom: 1px dotted gray;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 1rem;
  min-height: 80vh;
  width: 80vw;
  display: flex;
  //background: gray;
  //backdrop-filter: blur();
  //align-items: center;
  //justify-content: center;
`;
