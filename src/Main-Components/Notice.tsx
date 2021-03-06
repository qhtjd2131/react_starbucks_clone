import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  usePromotionContext,
} from "../Main";
import * as data from "./NoticeData";

const NoticeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 66px;
  font-size: 18px;
  font-weight: 600;
`;

const NoticeLeft = styled.div`
  height: 100%;
  width: 50%;

  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;
const NoticeRight = styled.div`
  background-color: #f6f5ef;
  height: 100%;
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftTitle = styled.label`
  padding: 0px 40px;
`;
const LeftItems = styled.div`
  flex: 1;
  box-sizing: border-box;
  margin-right: 160px;
  position: relative;
  height: 26px;
  overflow: hidden;
`;

const LItem = styled.div<{
  index: number;
  noticeIndex: number;
}>`
  width: 100%;
  font-size: 18px;
  font-weight: 300;
  overflow: hidden;
  padding: 0px 5px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  transition: top 0.5s;
  opacity: 0;
  position: absolute;
  top: 120%;
  left: 0;
  height: 100%;
  background-color: black;
  

  ${(props) =>
    props.index === props.noticeIndex &&
    css`
      opacity: 1;
      top: 0;
      z-index: 1;
    `};
  ${(props) =>
    props.index === (props.noticeIndex + 4) % 5 &&
    css`
      top: 0;
      opacity: 1;
      z-index: 0;
    `};
`;

const LeftItemLabel = styled.label`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor : pointer;

  padding-bottom : 2px;


  &:hover{
    text-decoration : underline;
  }
`;

const LeftButton = styled.button`
  position: absolute;
  right: 30px;
  width: 36px;
  height: 36px;
  font-size: 24px;
  border: 2px solid white;
  background-color: black;
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;

const RightTitle = styled.label`
  padding-right: 60px;
`;

const RightButton = styled.button`
  padding: 0;
  border: none;
  width: 36px;
  height: 36px;
  background-color: #f6f5ef;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpDownImage = styled.img``;

const Notice = () => {
  const [noticeIndex, setNoticeIndex] = useState<number>(0);
  const { isPromotionOpen, setIsPromotionOpen } = usePromotionContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setNoticeIndex((i) => {
        let result = (i + 1) % 5;
        return result;
      });
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <NoticeWrapper>
      <NoticeLeft>
        <LeftTitle>????????????</LeftTitle>
        <LeftItems>
          {data.noticeData.map((i, index) => {
            return (
              <LItem key={index} index={index} noticeIndex={noticeIndex}>
                <LeftItemLabel>{i.title}</LeftItemLabel>
              </LItem>
            );
          })}
        </LeftItems>
        <LeftButton>+</LeftButton>
      </NoticeLeft>
      <NoticeRight>
        <RightTitle>???????????? ????????????</RightTitle>

        <RightButton onClick={() => setIsPromotionOpen(!isPromotionOpen)}>
          <UpDownImage
            src={
              isPromotionOpen
                ? "https://image.istarbucks.co.kr/common/img/common/btn_prom_up.png"
                : "https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png"
            }
            alt=""
          />
        </RightButton>
      </NoticeRight>
    </NoticeWrapper>
  );
};

export default Notice;
