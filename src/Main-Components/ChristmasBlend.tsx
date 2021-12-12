import styled from "styled-components";

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

const BlendDescriptionButton = styled.button`
  background-color: transparent;
  border: 2px solid black;
  border-radius: 8px;
  font-size: 16px;
  width: 130px;
  padding: 10px;
  font-weight: 700;
  cursor: pointer;
  transition : 0.6s ease-in-out;

 &:hover{
     color : white;
     background-color : black;
     text-decoration : underline;
 }
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
        <BlendDescriptionButton>자세히 보기</BlendDescriptionButton>
      </BlendDescription>
    </ChristmasBlendComponent>
  );
};

export default ChristmasBlend;
