import { Sign } from "crypto";
import styled from "styled-components";

const RewardsComponent = styled.div`
  background-color: #1e3932;
`;

const RewardsContainer = styled.div`
  display: flex;
  align-items : center;
  color: white;
  padding: 30px;
  box-sizing: border-box;
`;

const RewardsLogo = styled.img`
  width: 20%;
  margin-right: 60px;
`;

const RewardsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 24px;
  letter-spacing: -1.5px;
  width : 100%;
`;

const RewardsInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
`;

const RewardsGift = styled.div`
  display: flex;
  justify-content: space-between;

`;

const InfoTitle = styled.label`
  font-size: 28px;
  padding-bottom: 20px;
`;

const InfoSubTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const InfoSubTitle = styled.label`
  font-size: 18px;
`;

const LoginContainer = styled.div`
  display: flex;
`;

const SignUpButton = styled.button``;

const LoginButton = styled.button``;

const GiftDescription = styled.label``;
const GiftButton = styled.button``;

const Strong = styled.label`
  font-weight: 700;
`;
const Rewards = () => {
  return (
    <RewardsComponent>
      <RewardsContainer>
        <RewardsLogo
          src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png"
          alt=""
        />
        <RewardsItemWrapper>
          <RewardsInfo>
            <InfoTitle>
              스타벅스만의 특별한 혜택, <Strong>스타벅스 리워드</Strong>
            </InfoTitle>
            <InfoSubTitleContainer>
              <InfoSubTitle>
                <Strong>스타벅스 회원이세요?</Strong> 로그인을 통해 나만의
                리워드를 확인해보세요.
                <br />
                <Strong>스타벅스 회원이 아니세요?</Strong> 가입을 통해 리워드
                혜택을 즐기세요.
              </InfoSubTitle>

              <LoginContainer>
                <SignUpButton>회원 가입</SignUpButton>
                <LoginButton>로그인</LoginButton>
              </LoginContainer>
            </InfoSubTitleContainer>
          </RewardsInfo>

          <RewardsGift>
            <GiftDescription>
              회원 가입 후, 스타벅스 e-Gift Card를{" "}
              <Strong>
                "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!
              </Strong>
              <br />
              카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면
              무료 음료쿠폰을 드립니다!
            </GiftDescription>
            <GiftButton>e-Gift Card 선물하기</GiftButton>
          </RewardsGift>
        </RewardsItemWrapper>
      </RewardsContainer>
    </RewardsComponent>
  );
};

export default Rewards;
