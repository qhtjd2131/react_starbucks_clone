import { createRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FindStoreBox = styled.div`
  background-image: url("/images/store_bg.jpg");
  width: 100%;
  height: 400px;

  min-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10%;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 600px;
  top: 0;
  left: 0;
  background-color: transparent;
`;
const TextWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
`;

const Image1 = styled.img`
  position: absolute;
  left: 240px;
  top: 130px;
  z-index: 10;
`;
const Image2 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;
const DecoImage1 = styled.img`
  position: absolute;
  left: 400px;
  top: -60px;
`;
const DecoImage2 = styled.img`
  position: absolute;
  left: 800px;

  bottom: 0;
`;

const Text1 = styled.img`
  position: absolute;
  top: 100px;
`;
const Text2 = styled.img`
  position: absolute;
  top: 170px;
`;
const FindButton = styled.button`
  position: absolute;
  top: 260px;
  width: 144px;
  height: 42px;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    transition: 1s;
    text-decoration: underline;
    background-color: black;
    color: white;
  }
`;

const FindStore = () => {
  const imageRef = createRef<HTMLImageElement>();
  const decoImage1Ref = createRef<HTMLImageElement>();
  const decoImage2Ref = createRef<HTMLImageElement>();
  const Text1Ref = createRef<HTMLImageElement>();
  const Text2Ref = createRef<HTMLImageElement>();
  const buttonRef = createRef<HTMLButtonElement>();

  useLayoutEffect(() => {
    gsap.fromTo(
      [imageRef.current, decoImage1Ref.current, decoImage2Ref.current],
      {
        duration: 1,
        autoAlpha: 0,
      },
      {
        scrollTrigger: {
          id: `image`,
          trigger: imageRef.current,
          toggleActions: "play none none reverse",
          start: "top center+=200",
          markers: false,
        },
        ease: "power3.inOut",
        autoAlpha: 1,
      }
    );
  }, []);

  useLayoutEffect(() => {
    const refArr = [Text1Ref.current, Text2Ref.current, buttonRef.current];

    refArr.forEach((_ref, index) => {
      gsap.fromTo(
        _ref,
        { x: 700, autoAlpha: 0, transition: 1 },
        {
          scrollTrigger: {
            id: `text${index}`,
            trigger: imageRef.current,
            toggleActions: "play none none reverse",
            start: "top center+=200",
            markers: false,
          },

          delay: 0.2 * index,
          x: 0,
          autoAlpha: 1,
        }
      );
    });
  }, []);

  return (
    <FindStoreBox>
      <InnerWrapper>
        <ImageWrapper ref={imageRef}>
          <Image1 src="/images/store_exp_img01.png" alt="" />
          <Image2 src="/images/store_exp_img02.png" alt="" />
        </ImageWrapper>
        <DecoImage1
          src="/images/store_exp_img03.png"
          alt=""
          ref={decoImage1Ref}
        />
        <DecoImage2
          src="/images/store_exp_img04.png"
          alt=""
          ref={decoImage2Ref}
        />
        <TextWrapper>
          <Text1 src="/images/store_txt01.png" alt="" ref={Text1Ref} />
          <Text2 src="images/store_txt02.png" alt="" ref={Text2Ref} />
          <FindButton ref={buttonRef}>매장 찾기</FindButton>
        </TextWrapper>
      </InnerWrapper>
    </FindStoreBox>
  );
};

export default FindStore;
