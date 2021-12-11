import styled from "styled-components";
import * as data from "./PromotionData";
//style
const PromotionContainer = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
`;

const PromotionItemWrapper = styled.div`
  background-color: #f6f5ef;
  display: flex;
  gap: 10px;
  padding: 30px 0px;
`;

const PromotionItem = styled.div``;

const PromotionImage = styled.img``;

const ControllBarWrapper = styled.div``;

//interface

interface IPromotionProps {}
const Promotion = () => {
  return (
    <PromotionContainer>
      <PromotionItemWrapper>
        {data.promotionData.map((i, index) => (
          <PromotionItem key={index}>
            <PromotionImage src={i.imgSrc} alt="" />
          </PromotionItem>
        ))}
      </PromotionItemWrapper>
      <ControllBarWrapper></ControllBarWrapper>
    </PromotionContainer>
  );
};

export default Promotion;
