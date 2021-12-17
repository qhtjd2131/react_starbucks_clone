import styled from "styled-components";
import MoreInfoButton from "./MoreInfoButton";

const PickYourFavoriteComponent = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
`;

const TextImage1 = styled.img`
  position: absolute;
  width: 320px;
  transform: translate(-100%, -100%);

  padding: 20px;
  padding-bottom: 40px;
  top: 50%;
  left: 38%;
`;

const TextImage2 = styled.img`
  position: absolute;
  width: 420px;

  transform: translateX(-100%);
  top: 50%;
  left: 38%;
  padding: 20px;
`;

const FavImage = styled.img`
  position: absolute;
  right: 0;
  top: 50%;

  transform: translateY(-50%);
`;

const MoreInfoButtonBox = styled.div`
  position: absolute;
  transform: translateX(-100%);
  padding: 20px;
  top: 76%;
  left: 38%;
`;

const PickYourFavorite = () => {
  return (
    <PickYourFavoriteComponent>
      <TextImage1
        src="https://www.starbucks.co.kr/common/img/main/fav_prod_txt01.png"
        alt=""
      />
      <TextImage2
        src="https://www.starbucks.co.kr/common/img/main/fav_prod_txt02.png"
        alt=""
      />
      <MoreInfoButtonBox>
        <MoreInfoButton color="white" hoverColor="black"></MoreInfoButton>
      </MoreInfoButtonBox>
      <FavImage
        src="https://image.istarbucks.co.kr/img/event/2021/2021_christmas2_fav.png"
        alt=""
      />
    </PickYourFavoriteComponent>
  );
};

export default PickYourFavorite;
