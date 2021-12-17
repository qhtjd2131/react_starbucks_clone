import styled from "styled-components";
import MoreInfoButton from "./MoreInfoButton";

//style
const ReserveMerryComponent = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 400px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2021/reserve_christmas_bean_211018.jpg");
  background-position: center;

`;

const ReserveMerryItemWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  gap: 30px;
`;
const ReserveMerryImage = styled.img`
  width: 100%;
  height: 30%;
`;

const ReserveMerryMoreInfoButton = styled.button`
  width: 144px;
  height: 42px;
  margin-left: 60px;
  color: #d5a012;
  background-color: transparent;
  border: 2px solid #d5a012;
  border-radius: 8px;

  font-size : 16px;
  font-weight : 700;
`;

const ReserveMerry = () => {
  return (
    <ReserveMerryComponent>
      <ReserveMerryItemWrapper>
        <ReserveMerryImage
          src="https://image.istarbucks.co.kr/upload/common/img/main/2021/reserve_christmas_bean_title_211018.png"
          alt=""
        />
        <MoreInfoButton color={"#d5a012"} />
      </ReserveMerryItemWrapper>
    </ReserveMerryComponent>
  );
};

export default ReserveMerry;
