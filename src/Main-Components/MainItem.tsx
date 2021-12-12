import React, { createRef, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

const MainItemWrapper = styled.div`
  background-color: #d1131d;
  position: relative;
  width: 100%;
  min-width: 800px;
  height: 700px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const TitleItem = styled.img<{
  isRender?: boolean;
  transitionDelay?: string;
}>`
  width: 30%;
  padding: 30px 0px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  transition-delay: ${(props) =>
    props.transitionDelay ? props.transitionDelay + "s" : 1 + "s"};

  ${(props) =>
    props.isRender &&
    css`
      opacity: 1;
    `};
`;

const TitleButtonWrapper = styled.div<{
  isRender?: boolean;
  transitionDelay?: string;
}>`
  width: 30%;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease-in-out;

  transition-delay: ${(props) =>
    props.transitionDelay ? props.transitionDelay + "s" : 1 + "s"};

  ${(props) =>
    props.isRender &&
    css`
      opacity: 1;
    `};
`;
const TitleButton = styled.button`
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 4px;
  padding: 8px 22px;
  cursor: pointer;
  &:hover {
    background-color: #df5a61;
    transition: 0.3s;
    text-decoration: underline;
  }
`;
const CoffeeItem = styled.img<{
  topPercent?: string;
  leftPercent?: string;
  width?: string;
  isRender?: boolean;
  transitionDelay?: string;
  maxWidth?: string;
  minWidth?: string;
}>`
  position: absolute;
  max-width: ${(props) =>
    props.maxWidth ? props.maxWidth + "px" : 1000 + "px"};
  min-width: ${(props) => (props.minWidth ? props.minWidth + "px" : 0 + "px")};
  opacity: 0;
  top: ${(props) => (props.topPercent ? props.topPercent + "%" : 0)};

  left: ${(props) =>
    props.leftPercent ? props.leftPercent + "%" : 200 + "px"};

  width: ${(props) => (props.width ? props.width + "%" : 100)};

  transition: opacity 0.5s ease-in-out;

  transition-delay: ${(props) =>
    props.transitionDelay ? props.transitionDelay + "s" : 1 + "s"};

  ${(props) =>
    props.isRender &&
    css`
      opacity: 1;
    `};
`;

const MainItem1 = () => {
  const [isRender, setIsRender] = useState<boolean>(false);
  useEffect(() => {
    setIsRender(true);
  }, []);
  return (
    <MainItemWrapper>
      <TitleItem
        src="https://image.istarbucks.co.kr/img/event/2021/2021_chiristmas2_slogan.png"
        alt=""
        isRender={isRender}
        transitionDelay="0.5"
      />
      <TitleButtonWrapper isRender={isRender} transitionDelay="2.5">
        <TitleButton>자세히 보기</TitleButton>
      </TitleButtonWrapper>
      <CoffeeItem
        src="https://image.istarbucks.co.kr/img/event/2021/2021_christmas2_drink.png"
        alt=""
        topPercent="40"
        leftPercent="10"
        width="38"
        isRender={isRender}
        transitionDelay="1"
        maxWidth="500"
        minWidth="300"
      />
      <CoffeeItem
        src="https://image.istarbucks.co.kr/img/event/2021/2021_christmas2_drink2.png"
        alt=""

        topPercent="20"
        leftPercent="43"
        width="32"
        isRender={isRender}
        transitionDelay="1.5"
        maxWidth="400"
        minWidth="200"
      />
      <CoffeeItem
        src="https://image.istarbucks.co.kr/img/event/2021/2021_christmas2_drink3.png"
        alt=""

        topPercent="15"
        leftPercent="65"
        width="39"
        isRender={isRender}
        transitionDelay="2"
        maxWidth="500"
        minWidth="300"
      />
    </MainItemWrapper>
  );
};

export default MainItem1;
