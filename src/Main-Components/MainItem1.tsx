import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const MainItemWrapper = styled.div`
  background-color: #d1131d;
  position: relative;
  width: 100%;
  height: 700px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const TitleItem = styled.img`
  width: 30%;
  padding: 30px 0px;
`;

const TitleButtonWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
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
}>`
  position: absolute;
  max-width: 100%;
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
      />
      <TitleButtonWrapper>
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
      />
      <CoffeeItem
        src="https://image.istarbucks.co.kr/img/event/2021/2021_christmas2_drink2.png"
        alt=""
        topPercent="20"
        leftPercent="43"
        width="32"
        isRender={isRender}
        transitionDelay="2"
      />
      <CoffeeItem
        src="https://image.istarbucks.co.kr/img/event/2021/2021_christmas2_drink3.png"
        alt=""
        topPercent="15"
        leftPercent="65"
        width="39"
        isRender={isRender}
        transitionDelay="3"
      />
    </MainItemWrapper>
  );
};

export default MainItem1;
