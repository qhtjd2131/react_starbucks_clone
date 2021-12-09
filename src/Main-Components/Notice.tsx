import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

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
  background-color: white;
  height: 100%;
  width: 50%;

  display: flex;
  justify-content: center;
`;

const LeftTitle = styled.label`
  padding: 0px 10px;
`;
const LeftItems = styled.div`
  flex: 1;
  border: 1px solid white;
  box-sizing: border-box;
  margin-right: 90px;
  position: relative;
  height: 24px;
`;

const LItem = styled.div<{
  index: number;
  noticeIndex: number;
}>`
  transition: top 1s;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 0;
  height: 100%;
  overflow: hidden;
  background-color: black;
  ${(props) =>
    props.index === props.noticeIndex &&
    css`
      opacity: 1;
      top: 0;
      z-index : 1;
    `};
  ${(props) =>
    props.index === (props.noticeIndex +4)%5 &&
    css`
      top: 0;
      opacity: 1;
      z-index : 0;
    `};
`;

const LeftButton = styled.button`
  position: absolute;
  right: 30px;
  width: 36px;
  height: 36px;
  font-size: 24px;
  border: 1px solid white;
  background-color: black;
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;

const RightTitle = styled.label`
  padding-right: 60px;
`;

const RightButton = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
`;

interface Iitem {
  title: string;
}
const noticeData: Iitem[] = [
  {
    title: "11111111",
  },
  {
    title: "22222222",
  },
  {
    title: "33333333",
  },
  {
    title: "44444444",
  },
  {
    title: "55555555",
  },
];

const Notice = () => {
  const [noticeIndex, setNoticeIndex] = useState<number>(0);

  useEffect(() => {
    // while (true) {
    //   setTimeout(() => {
    //     setNoticeIndex(() => {
    //       let result = (noticeIndex + 1) % 5;
    //       console.log(result);
    //       return result;
    //     });
    //   }, 2500);
    // }

    const interval = setInterval(() => {
      setNoticeIndex((i) => {
        let result = (i + 1) % 5;
        console.log(result);
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
        <LeftTitle>공지사항</LeftTitle>
        <LeftItems>
          {noticeData.map((i, index) => {
            return (
              <LItem key={index} index={index} noticeIndex={noticeIndex}>
                {i.title}
              </LItem>
            );
          })}
        </LeftItems>
        <LeftButton>+</LeftButton>
      </NoticeLeft>
      <NoticeRight>
        <RightTitle>스타벅스 프로모션</RightTitle>
        <RightButton>Y</RightButton>
      </NoticeRight>
    </NoticeWrapper>
  );
};

export default Notice;
