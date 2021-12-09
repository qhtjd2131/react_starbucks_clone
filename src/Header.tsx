import React from "react";
import styled from "styled-components";
import InnerNav from "./Header-Components/InnerNav";
import Logo from "./Header-Components/Logo";
import UtilNav from "./Header-Components/UtilNav";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  box-sizing : border-box;
  top: 0;
  background-color: #f6f5ef;
  position : relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <UtilNav />

      <InnerNav />
    </HeaderWrapper>
  );
};

export default Header;
