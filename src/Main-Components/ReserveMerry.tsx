import styled from "styled-components";
import MoreInfoButton from "./MoreInfoButton";

//style
const ReserveMerryComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;

  width: 100%;
  height: 400px;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2021/reserve_christmas_bean_211018.jpg");
  background-position: center;
  background-size : cover;

`;

const ReserveMerryItemWrapper = styled.div`
  width: 60%;
  display: flex;
  max-width : 1300px;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  gap: 30px;
  transform : translateX(-20%);
`;
const ReserveMerryImage = styled.img`
  width: 100%;
  height: 30%;
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
