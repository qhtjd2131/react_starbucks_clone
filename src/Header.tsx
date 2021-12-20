import styled from "styled-components";
import InnerNav from "./Header-Components/InnerNav";
import Logo from "./Header-Components/Logo";
import UtilNav from "./Header-Components/UtilNav";

const HeaderBox = styled.div`
  width: 100%;
  height: 120px;
  box-sizing : border-box;
  top: 0;
  background-color: #f6f5ef;
  position : fixed;
  top : 0;
  left : 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index : 999;
`;

const Header = () => {
  return (
    <HeaderBox>
      <Logo />
      <UtilNav />

      <InnerNav />
    </HeaderBox>
  );
};

export default Header;
