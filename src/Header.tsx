import React from "react";
import styled from "styled-components";
import InnerNav from "./Header-Components/InnerNav";
import Logo from "./Header-Components/Logo";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid black;
  position: fixed;
  top: 0;
  background-color: #f6f5ef;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <InnerNav />
    </HeaderWrapper>
  );
};

export default Header;
