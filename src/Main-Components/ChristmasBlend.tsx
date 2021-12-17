import styled from "styled-components";
import MoreInfoButton from "./MoreInfoButton";

const ChristmasBlendComponent = styled.div`
  background-image: url("https://image.istarbucks.co.kr/img/event/2021/2021_christmas2_bean_bg.jpg");
    background-size : cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
`;

const BlendImage = styled.img`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
`;

const BlendDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  padding: 20px;
  box-sizing: border-box;
  gap : 20px;
`;

const BlendDescriptionTextImage = styled.img`
  width: 100%;
`;

const ChristmasBlend = () => {
  return (
    <ChristmasBlendComponent>
      <BlendImage
        src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_chrsitmas_bean.png"
        alt=""
      />
      <BlendDescription>
        <BlendDescriptionTextImage
          src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_chrsitmas_bean_txt.png"
          alt=""
        />
        <MoreInfoButton color="black" />
      </BlendDescription>
    </ChristmasBlendComponent>
  );
};

export default ChristmasBlend;
