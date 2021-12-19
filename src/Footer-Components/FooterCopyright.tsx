import styled from "styled-components";

const FooterCopyrightBox = styled.section`
  width: 100%;
  background-color: #2c2a29;
  color: gray;
  font-size: 12px;
  font-weight: 0;
`;

const InnerWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RulesWrapper = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
`;

const Rule = styled.div`
  padding: 14px 6px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const ButtonsWrapper = styled.div``;
const ButtonItem = styled.button`
  color: white;
  font-size: 12px;
  margin: 6px;
  margin-top: 0;
  padding: 4px 18px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CopyinfoWrapper = styled.div`
  display: flex;
`;
const Info = styled.div`
  padding: 14px 6px;
`;

const CopyRightWrapper = styled.div``;

const rules: string[] = [
  "개인정보처리방침",
  "영상정보처리기기 운영관리 방침",
  "홈페이지 이용약관",
  "위치정보 이용약관",
  "스타벅스 카드 이용약관",
  "비회원 이용약관",
  "My DT Pass 서비스 이용약관",
  "윤리경영 핫라인",
];

const btn_name: string[] = ["찾아오시는 길", "신규입점제의", "사이트 맵"];

const infos: string[] = [
  "사업자등록번호 : 201-81-21515",
  "(주)스타벅스커피 코리아 대표이사 : 송 데이비드 호섭",
  "TEL : 1522-3232",
  "개인정보 책임자 : 하익성",
];
const FooterCopyright = () => {
  return (
    <FooterCopyrightBox>
      <InnerWrapper>
        <RulesWrapper>
          {rules.map((str: string, index: number) => (
            <Rule key={index}>{str}</Rule>
          ))}
        </RulesWrapper>
        <ButtonsWrapper>
          {btn_name.map((name: string, index: number) => (
            <ButtonItem key={index}>{name}</ButtonItem>
          ))}
        </ButtonsWrapper>
        <CopyinfoWrapper>
          {infos.map((info: string, index: number) => (
            <Info key={index}>{info} </Info>
          ))}
        </CopyinfoWrapper>
        <CopyRightWrapper>
          ⓒ 2021 Starbucks Coffee Company. All Rights Reserved
        </CopyRightWrapper>
      </InnerWrapper>
    </FooterCopyrightBox>
  );
};

export default FooterCopyright;
