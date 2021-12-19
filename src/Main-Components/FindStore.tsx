import { createRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const FindStoreBox = styled.div`
  background-image: url("/images/store_bg.jpg");
  width: 100%;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  height: 100%;
  position: relative;

  overflow: hidden;
  width: 80%;
  left: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  max-width: 1100px;
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
  left: 700px;

  bottom: 0;
`;

const Text1 = styled.img`
  position: absolute;
  left: 600px;
  top: 100px;
`;
const Text2 = styled.img`
  position: absolute;
  left: 600px;
  top: 170px;
`;
const FindButton = styled.button`
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
        autoAlpha: 0,
      },
      {
        ScrollTrigger: {
          id: "image",
          trigger: imageRef.current,
          toggleAction: "play none none reverse",
          start: "top center+=200",
          markers: true,
        },
        autoAlpha: 1,
        transition: 2,
      }
    );
  }, []);

  useLayoutEffect(() => {
    const refArr = [Text1Ref.current, Text2Ref.current, buttonRef.current];

    refArr.forEach((_ref, index) => {
      gsap.fromTo(
        _ref,
        { x: 1000, autoAlpha: 0, duration: 2 },
        {
          ScrollTrigger: {
            id: "text",
            trigger: Text1Ref.current,
            toggleAction: "play none none reverse",
            start: "top center+=200",
            markers: true,
          },
         
          delay: 0.2 * index,
          x: 0,
          autoAlpha: 1,
          transition: 2,
        }
      );
    });

    // gsap.fromTo(
    //   Text1Ref.current,
    //   {
    //     autoAlpha : 0,

    //   },
    //   {
    //     ScrollTrigger: {
    //       trigger: imageRef.current,
    //       toggleAction: "play none none reverse",
    //       start: "top center+=200",
    //       markers: true,
    //     },
    //     autoAlpha : 1,
    //     duration: 2,

    //   }
    // );
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
        <Text1 src="/images/store_txt01.png" alt="" ref={Text1Ref} />
        <Text2 src="images/store_txt02.png" alt="" ref={Text2Ref} />
        <FindButton ref={buttonRef}>매장 찾기</FindButton>
      </InnerWrapper>
    </FindStoreBox>
  );
};

export default FindStore;
