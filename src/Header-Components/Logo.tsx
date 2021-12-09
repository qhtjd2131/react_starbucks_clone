import React from "react";
import styled from "styled-components";

const LogoComponent = styled.img`
  position: absolute;
  left: 20px;
  top: 50%;
  
  transform: translateY(-50%);
`;

const Logo = () => {
  return (
    <LogoComponent
      src="https://www.starbucks.co.kr/common/img/common/logo.png"
      alt=""
    />
  );
};

export default Logo;