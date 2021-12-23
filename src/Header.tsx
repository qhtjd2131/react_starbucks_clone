import styled from "styled-components";
import InnerNav from "./Header-Components/InnerNav";
import Logo from "./Header-Components/Logo";
import UtilNav from "./Header-Components/UtilNav";

const HeaderBox = styled.div`
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  background-color: #f6f5ef;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1160px;
  min-width : 950px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;

  position: relative;
  @media only screen and (min-width: 1200px) {
  }
`;

const Header = () => {
  return (
    <HeaderBox>
      <InnerWrapper>
        <Logo />
        <UtilNav />

        <InnerNav />
      </InnerWrapper>
    </HeaderBox>
  );
};

export default Header;
