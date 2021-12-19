import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import * as data from "./PromotionData";
import { usePromotionContext } from "../Main";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SCALE_XL = 3.5; //xl : 3.5
export const SLIDE_ITEM_WIDTH = 950;
export const ITEM_COUNT = 5;

//style
const PromotionContainer = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  height: 0;
`;

const PromotionItemWrapper = styled.div`
  background-color: #f6f5ef;
  display: flex;
  padding: 30px 0px;
  position: relative;
  /* transform: translateX(calc(50% / ${SCALE_XL}));
  width: calc(100% * ${SCALE_XL});
  left: calc(-50% * ${SCALE_XL}); */

  transform: translateX(-50%);
  width: calc(${SLIDE_ITEM_WIDTH}px * ${ITEM_COUNT});
  left: 50%;
`;

const PromotionItem = styled.div`
  min-width: 0;
`;

const PromotionImage = styled.img`
  width: ${SLIDE_ITEM_WIDTH}px;
  box-sizing: border-box;
  padding: 0px 10px;
  min-width: 0;
`;

const Stripes = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 20%;
  z-index: 100;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  width: 6px;
  height: 6px;
  background-color: #acaba7;
  border: 5px solid #acaba7;
  content: "";
  display: block;
  border-radius: 50%;
  margin: 1rem;
  cursor: pointer;
`;
const PlayButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PlayButtonImage = styled.img`
  width: 12px;
  height: 16px;
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid black;
  position: absolute;
  cursor: pointer;
  font-size: 40px;
`;
const ButtonLeft = styled(Button)`
  top: 40%;
  left: 38%;
`;

const ButtonRight = styled(Button)`
  top: 40%;
  right: 38%;
`;

//interface

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
      duration: 0.5,
      ease: "power3.inOut",
    },
    paused: true,
  });

  const promotionRef = createRef<HTMLDivElement>();

  const [state, setState] = useState<Istate>({ prev: 2, current: 0, next: 1 });
  const [userDetected, setUserDetected] = useState<boolean>(false);
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const [playState, setPlayState] = useState<boolean>(false);
  const { isPromotionOpen, setIsPromotionOpen } = usePromotionContext();

  const activateTimer = () => {
    //타이머
    timer = setTimeout(() => {
      stepForward();
    }, 2000);
  };

  const calculateIndexs = (index: number) => {
    //인덱스계산

    if (index === data.promotionData.length - 1) {
      setState({ prev: 1, current: index, next: 0 });
    } else if (index === 0) {
      setState({ prev: index + 2, current: index, next: index + 1 });
    } else {
      setState({ prev: index - 1, current: index, next: index + 1 });
    }
    setIsSliding(false);
  };

  const flowUp = (
    onComplete: any,
    direction: "left" | "right" = "right",
    repeat: number = 1
  ) => {
    console.log("flowUp Function excuted!");
    setIsSliding(true);

    let number_d: number = -100 * repeat;

    if (direction === "left") {
      number_d = 100 * repeat;
    }
    const d: string = number_d + "%";

    //시간에 따라 자동적으로 넘길때
    timeline
      .to(elems.current[0], {
        x: d,
        opacity: 0.5,
      })
      .to(
        elems.current[1],
        {
          x: d,
          opacity: 0.5,
        },
        "-=0.5"
      )
      .to(
        elems.current[2],
        {
          x: d,
          opacity: 0.5,
        },
        "-=0.5"
      )
      .to(
        elems.current[3],
        {
          x: d,
          opacity: 0.5,
        },
        "-=0.5"
      )
      .to(
        elems.current[4],
        {
          x: d,
          opacity: 0.5,
          onComplete,
        },
        "-=0.5"
      )
      .play();
  };

  const handleChange = (index: number) => {
    if (!isSliding) {
      if (index !== state.current) {
        clearTimeout(timer);
        setUserDetected(true);
        const result: number = state.current - index;
        if (result < 0) {
          //right
          flowUp(() => calculateIndexs(index), "right", result * -1);
        } else if (result > 0) {
          //left
          flowUp(() => calculateIndexs(index), "left", result);
        }
      }
    }
  };

  const handleRight = () => {
    if (!isSliding) {
      clearTimeout(timer);
      setUserDetected(true);
      flowUp(() => calculateIndexs(state.next));
    }
  };

  const handleLeft = () => {
    if (!isSliding) {
      setIsSliding(true);
      clearTimeout(timer);
      setUserDetected(true);
      flowUp(() => calculateIndexs(state.prev), "left");
    }
  };

  const stepForward = () => {
    setUserDetected(false);
    flowUp(() => calculateIndexs(state.next));
  };

  const handlePlay = () => {
    clearTimeout(timer);
    console.log("clear timer");
    if (playState) {
      console.log("////stop////");
      pauseSlide();
    } else {
      console.log("////play////");
      playSlide();
    }
  };

  const playSlide = () => {
    setPlayState(() => !playState);
  };

  const pauseSlide = () => {
    setPlayState(() => !playState);
  };
  useEffect(() => {
    if (isPromotionOpen) {
      setPlayState(true);
      gsap.to(promotionRef.current, {
        height: 688,
        duration : 1,
        ease: "power3.inOut",
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });
    } else {
      setPlayState(false);
      gsap.to(promotionRef.current, {
        height: 0,
        duration : 1,
        ease: "power3.inOut",
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });
    }
  }, [isPromotionOpen]);

  useLayoutEffect(() => {
    console.log("uselayoutEffect");
    const image1 = !!elems.current[0] && elems.current[0];
    const image2 = !!elems.current[1] && elems.current[1];
    const image3 = !!elems.current[2] && elems.current[2];
    const image4 = !!elems.current[3] && elems.current[3];
    const image5 = !!elems.current[4] && elems.current[4];

    if (playState) {
      activateTimer(); //moving item
      console.log("activateTimer");
    }
    gsap.set(image2, { x: "0%", opacity: 1 });
    if (userDetected) {
      gsap.set(image1, { x: "0%", opacity: 0.5 });
      gsap.set(image3, { x: "0%", opacity: 0.5 });
      gsap.set(image4, { x: "0%", opacity: 0.5 });
      gsap.set(image5, { x: "0%", opacity: 0.5 });
    } else {
      gsap.set(image1, { x: "0%", opacity: 0.5 });
      gsap.set(image3, { x: "0%", opacity: 0.5 });
      gsap.set(image4, { x: "0%", opacity: 0.5 });
      gsap.set(image5, { x: "0%", opacity: 0.5 });
    }

    return () => {
      clearTimeout(timer);
    };
  }, [state, playState]);

  return (
    <PromotionContainer ref={promotionRef}>
      <PromotionItemWrapper>
        <PromotionItem>
          <PromotionImage
            ref={(elem) => (elems.current[4] = elem)}
            src={data.promotionData[state.next].imgSrc}
            alt=""
          />
        </PromotionItem>
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
        <PromotionItem>
          <PromotionImage
            ref={(elem) => (elems.current[3] = elem)}
            src={data.promotionData[state.prev].imgSrc}
            alt=""
          />
        </PromotionItem>

        <ButtonRight onClick={() => handleRight()}>{">"}</ButtonRight>
        <ButtonLeft onClick={() => handleLeft()}>{"<"}</ButtonLeft>

        <Stripes>
          <PlayButton onClick={() => handlePlay()}>
            <PlayButtonImage
              src={
                playState
                  ? "https://www.starbucks.co.kr/common/img/main/main_prom_stop.png"
                  : "https://www.starbucks.co.kr/common/img/main/main_prom_play.png"
              }
              alt=""
            />
          </PlayButton>
          {data.promotionData.map((_item, index) =>
            index === state.current ? (
              <Span
                key={`stripe${index}`}
                onClick={() => handleChange(index)}
                style={{
                  opacity: 1,
                  border: "5px solid #067346",
                  backgroundColor: "#f6f5ef",
                }}
              ></Span>
            ) : (
              <Span
                key={`stripe${index}`}
                onClick={() => handleChange(index)}
                // style={{ opacity: 0.5 }}
              ></Span>
            )
          )}
        </Stripes>
      </PromotionItemWrapper>
    </PromotionContainer>
  );
};

export default Promotion;
