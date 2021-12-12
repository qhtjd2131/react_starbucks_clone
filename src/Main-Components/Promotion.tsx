import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import * as data from "./PromotionData";
//style
const PromotionContainer = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
  z-index : 999;
`;

const PromotionItemWrapper = styled.div`
  background-color: #f6f5ef;
  display: flex;
  gap: 10px;
  padding: 30px 0px;
`;

const PromotionItem = styled.div``;

const PromotionImage = styled.img``;

const ControllBarWrapper = styled.div``;





const Stripes = styled.div`
position: absolute;
  bottom: 2rem;
  right: 1rem;
  width: 40%;
  z-index: 100;
  height: 50px;
  display: flex;
  align-items: center;
  border : 1px solid black;
  `

  const Span = styled.span`
  width: 60px;
  height: 5px;
  background-color: white;
  content: '';
  display: block;
  border-radius: 10px;
  margin: 1rem;
  cursor: pointer;
  border : 1px solid blue;

  `

//interface

interface IPromotionProps {}
interface Istate {
  prev: number;
  current: number;
  next: number;
}
const Promotion = () => {
  let elems = useRef<any>([]);
  let timer: any = null;
  let timeline = gsap.timeline({
    defaults: {
      duration: 0.75,
      ease: "power3.inOut",
    },
    paused: true,
  });

  const [state, setState] = useState<Istate>({ prev: 0, current: 1, next: 2 });
  const [userDetected, setUserDetected] = useState<boolean>(false);
  const activateTimer = () => {
    timer = setTimeout(() => {
      stepForward();
    }, 4000);
  };

  const calculateIndexs = (index: number) => {
    if (index === data.promotionData.length - 1) {
      setState({ prev: 1, current: index, next: 0 });
    } else if (index === 0) {
      setState({ prev: index + 2, current: index, next: index + 1 });
    } else {
      setState({ prev: index - 1, current: index, next: index + 1 });
    }
  };

  const flowUp = (onComplete: any) => {
    timeline
      .to(elems.current[0], { y: "-100%", opacity: 0, scale: -0.5 })
      .to(
        elems.current[1],
        {
          y: "-100%",
          opacity: 1,
          scale: 1,
          onComplete,
        },
        "-=0.75"
      )
      .play();
  };

  const fadeOut = (onComplete: any) => {
    timeline
      .to(elems.current[0], {
        duration: 0.5,
        opacity: 0,
        onComplete,
      })
      .to(elems.current[0], { opacity: 1 })
      .play();
  };

  const handleChange = (index: number) => {
    if (index !== state.current) {
      clearTimeout(timer);
      setUserDetected(true);
      fadeOut(() => calculateIndexs(index));
    }
  };
  const stepForward = () => {
    setUserDetected(false);
    flowUp(() => calculateIndexs(state.next));
  };
  useEffect(() => {}, []);
  useLayoutEffect(() => {
    const image1 = !!elems.current[0] && elems.current[0];
    const image2 = !!elems.current[1] && elems.current[1];

    const image3 = !!elems.current[2] && elems.current[2];

    activateTimer();

    gsap.set(image2, { x: "0%", opacity: 0, scale: 1 });
    if (userDetected) {
      gsap.set(image1, { y: "0%", opacity: 0, scale: 1 });
      gsap.set(image3, { y: "0%", opacity: 0, scale: 1 });
    } else {
      gsap.set(image1, { y: "0%", opacity: 1, scale: 1 });
      gsap.set(image3, { y: "0%", opacity: 1, scale: 1 });
    }

    return () => {
      clearTimeout(timer);
    };
  }, [state]);
  return (
    <PromotionContainer>
      <PromotionItemWrapper>
        {/* {data.promotionData.map((i, index) => (
          <PromotionItem key={index}>
            <PromotionImage src={i.imgSrc} alt="" />
          </PromotionItem>
        ))} */}

        <PromotionItem>
          <PromotionImage
            ref={(elem) => (elems.current[0] = elem)}
            src={data.promotionData[state.prev].imgSrc}
            alt=""
          />
        </PromotionItem>

        <PromotionItem>
          <PromotionImage
            ref={(elem) => (elems.current[1] = elem)}
            src={data.promotionData[state.current].imgSrc}
            alt=""
          />
        </PromotionItem>

        <PromotionItem>
          <PromotionImage
            ref={(elem) => (elems.current[2] = elem)}
            src={data.promotionData[state.next].imgSrc}
            alt=""
          />
        </PromotionItem>
        <Stripes>
          {data.promotionData.map((_item, index) =>
            index === state.current ? (
              <span
                key={`stripe${index}`}
                onClick={() => handleChange(index)}
                style={{ opacity: 1 }}
              ></span>
            ) : (
              <span
                key={`stripe${index}`}
                onClick={() => handleChange(index)}
                style={{ opacity: 0.5 }}
              ></span>
            )
          )}
        </Stripes>
      </PromotionItemWrapper>
      <ControllBarWrapper></ControllBarWrapper>
    </PromotionContainer>
  );
};

export default Promotion;
