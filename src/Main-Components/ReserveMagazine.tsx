import { createRef } from "react";
import styled from "styled-components";
import MoreInfoButton from "./MoreInfoButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  position : relative;
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
    
`;

const ReserveMagazineVisual = styled.img``;

const ReserveMagazine = () => {
  const visualRef = createRef<HTMLImageElement>();
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
