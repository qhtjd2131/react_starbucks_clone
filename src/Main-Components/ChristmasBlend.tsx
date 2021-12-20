import gsap from "gsap/all";
import { url } from "inspector";
import { createRef, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import MoreInfoButton from "./MoreInfoButton";

const ChristmasBlendComponent = styled.div`
  background-image: url("https://image.istarbucks.co.kr/img/event/2021/2021_christmas2_bean_bg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 20px;
`;

const BlendImage = styled.img`
  width: 40%;
  max-width: 800px;
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
  max-width: 800px;

  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
`;

const BlendDescriptionTextImage = styled.img`
  width: 100%;
`;

const ChristmasBlend = () => {
  const mainRef = createRef<HTMLDivElement>();
  const leftRef = createRef<HTMLImageElement>();
  const rightRef = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -1000, autoAlpha: 0 },
      {
        scrollTrigger: {
          id: "aa",
          trigger: leftRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse",
          markers: false,
        },
        x: 0,
        autoAlpha: 1,
        duration: 1.5,
      }
    );
  }, []);
  useLayoutEffect(() => {
    gsap.fromTo(
      rightRef.current,
      { x: 1000, autoAlpha: 0 },
      {
        scrollTrigger: {
          id: "aa",
          trigger: leftRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse",
          markers: false,
        },
        x: 0,
        autoAlpha: 1,
        duration: 1.5,
      }
    );
  }, []);

  return (
    <ChristmasBlendComponent ref={mainRef} id="mainId">
      <BlendImage
        className="left"
        src="https://image.istarbucks.co.kr/upload/common/img/main/2021/2021_chrsitmas_bean.png"
        alt=""
        ref={leftRef}
      />
      <BlendDescription ref={rightRef}>
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
