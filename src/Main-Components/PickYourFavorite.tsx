import { createRef, useLayoutEffect } from "react";
import styled from "styled-components";
import MoreInfoButton from "./MoreInfoButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const PickYourFavoriteComponent = styled.div`
  width: 100%;
  height: 800px;
  background-image: url("https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  min-width: 1050px;

  display : flex;
  justify-content : center;
  align-items : center;
`;
const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 1280px;
`;

const TextImage1 = styled.img`
  position: absolute;

  padding: 20px;
  padding-bottom: 40px;
  top: 50%;
  left: 38%;
`;

const TextImage2 = styled.img`
  position: absolute;

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
  const boxRef = createRef<HTMLDivElement>();
  const ref1 = createRef<HTMLImageElement>();
  const ref2 = createRef<HTMLImageElement>();
  const ref3 = createRef<HTMLImageElement>();

  useLayoutEffect(() => {
    gsap.fromTo(
      ref1.current,
      { x: "-300%", y: "-100%", autoAlpha: 0 },
      {
        scrollTrigger: {
          id: "aa",
          trigger: boxRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse",
          markers: false,
        },
        x: "-100%",
        autoAlpha: 1,
        duration: 1.5,
      }
    );
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ref2.current,
      { x: "-300%", autoAlpha: 0 },
      {
        scrollTrigger: {
          id: "aa",
          trigger: boxRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse",
          markers: false,
        },
        x: "-100%",
        autoAlpha: 1,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <PickYourFavoriteComponent ref={boxRef}>
      <InnerWrapper>
        <TextImage1
          src="https://www.starbucks.co.kr/common/img/main/fav_prod_txt01.png"
          alt=""
          ref={ref1}
        />
        <TextImage2
          src="https://www.starbucks.co.kr/common/img/main/fav_prod_txt02.png"
          alt=""
          ref={ref2}
        />
        <MoreInfoButtonBox>
          <MoreInfoButton color="white" hoverColor="black"></MoreInfoButton>
        </MoreInfoButtonBox>
        <FavImage
          src="https://image.istarbucks.co.kr/img/event/2021/2021_christmas2_fav.png"
          alt=""
          ref={ref3}
        />
      </InnerWrapper>
    </PickYourFavoriteComponent>
  );
};

export default PickYourFavorite;
