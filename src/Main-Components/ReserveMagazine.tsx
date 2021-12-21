import { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import MoreInfoButton from "./MoreInfoButton";
import gsap from "gsap";

const ReserveMagazineBox = styled.div`
  width: 100%;
  height: 400px;
  background-size: auto 353px;
  background-image: url("images/reserve_bg_pc.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;

  position: relative;
`;

const ReserveMagazineTitle = styled.div`
  position: relative;
  padding-top: 135px;
  padding-left: 55px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const TitleImage = styled.img`
  width: 510px;
`;

const MoreInfoButtonWrapper = styled.div`
  position: relative;
  padding-top: 20px;
  padding-left: 255px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ReserveMagazineVisual = styled.img`
  display: block;
  position: absolute;
  bottom: auto;
  opacity: 0;
  top: 0;
  right: 50%;
  margin-right: -483px;
`;

const ReserveMagazine = () => {
  const visualRef = useRef<HTMLImageElement>(null);
  // const visualRef = createRef<HTMLImageElement>();


  useLayoutEffect(() => {
    console.log("11");
  
    gsap.fromTo(
      visualRef.current,
      {
        autoAlpha: 0,
        duration: 1,
      },
      {
        scrollTrigger: {
          id: "reserve-magazine--------------------",
          trigger: visualRef.current,
          start: "top center+=200",
          toggleActions: "play none none reverse",
          markers: false,
        },
        autoAlpha: 1,
      }
    );
  }, []);
  return (
    <ReserveMagazineBox>
      <ReserveMagazineTitle>
        <TitleImage src="/images/reserve_text_pc.png" alt="" />
      </ReserveMagazineTitle>
      <MoreInfoButtonWrapper>
        <MoreInfoButton color="black" />
      </MoreInfoButtonWrapper>
      <ReserveMagazineVisual
        src="/images/reserve_visual_pc.png"
        alt=""
        ref={visualRef}
      />
    </ReserveMagazineBox>
  );
};

export default ReserveMagazine;
