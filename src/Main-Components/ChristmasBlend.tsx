import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  gap: 20px;
`;

const BlendDescriptionTextImage = styled.img`
  width: 100%;
`;
gsap.registerPlugin(ScrollTrigger);

const ChristmasBlend = () => {
  const mainRef = createRef<HTMLDivElement>();
  const leftRef = createRef<HTMLImageElement>();
  const rightRef = createRef<HTMLDivElement>();
  const a = gsap.timeline;

//   useEffect(() => {
//     gsap.fromTo(
//       leftRef.current,
//       { x: 0 },
//       {
//         scrollTrigger: {
//           trigger: leftRef.current,
//           start: "top",
//           markers : true,
//         },
//         x: 400,
//         duration: 1,
//       }
//     );
//   }, []);

    useLayoutEffect(() => {
      console.log("useeffect animation");
      const element = mainRef.current;
      console.log(leftRef.current);
      gsap.fromTo(
        leftRef.current,
        { },
        {
          scrollTrigger: {
            id: "aa",
            trigger: leftRef.current,
            start: "top",
            //   toggleActions: "restart none reverse none",
          //   toggleActions: "play none none reverse",
            markers: true,
          },
          x: 410,
          autoAlpha: 1,
          duration: 2,
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
