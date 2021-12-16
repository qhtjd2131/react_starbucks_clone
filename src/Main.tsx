import styled from "styled-components";
import ChristmasBlend from "./Main-Components/ChristmasBlend";
import MainItem1 from "./Main-Components/MainItem";
import Notice from "./Main-Components/Notice";
import Promotion from "./Main-Components/Promotion";
import Rewards from "./Main-Components/Rewards";
import React, { useState, createContext, useContext } from "react";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export interface IpromotionContext {
    isPromotionOpen : boolean,
    setIsPromotionOpen : (c:boolean) => void;
}
export const promotionContext = createContext({} as IpromotionContext);
export const usePromotionContext = () => useContext(promotionContext);
const Main = () => {
  const [isPromotionOpen, setIsPromotionOpen] = useState<boolean>(false);

  return (
    <MainWrapper>
      <MainItem1 />
      <promotionContext.Provider
        value={{ isPromotionOpen, setIsPromotionOpen }}
      >
        <Notice />
        <Promotion />
      </promotionContext.Provider>
      <Rewards />
      <ChristmasBlend />
    </MainWrapper>
  );
};

export default Main;
