import styled from "styled-components";

const ChristmasBlendComponent = styled.div`
  background-image: url("https://image.istarbucks.co.kr/img/event/2021/2021_christmas2_bean_bg.jpg");
`;

const BlendImage = styled.img`
  width: 40%;
`;

const ChristmasBlend = () => {
  return(
  <ChristmasBlendComponent>
    <BlendImage
      src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_chrsitmas_bean.png"
      alt=""
    />
  </ChristmasBlendComponent>);
};

export default ChristmasBlend;
