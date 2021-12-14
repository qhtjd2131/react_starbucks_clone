import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import styled from "styled-components";
import * as data from "./PromotionData";
//style
const PromotionContainer = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
  z-index: 999;
`;

const PromotionItemWrapper = styled.div`
  background-color: #f6f5ef;
  display: flex;
  padding: 30px 0px;
`;

const PromotionItem = styled.div`

`;

const PromotionImage = styled.img`
  width: 400px;
  padding : 0px 10px;
`;

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
  border: 1px solid black;
`;

const Span = styled.span`
  width: 60px;
  height: 5px;
  background-color: blue;
  content: "";
  display: block;
  border-radius: 10px;
  margin: 1rem;
  cursor: pointer;
  border: 3px solid blue;
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
      duration: 0.75,
      ease: "power3.inOut",
    },
    paused: true,
  });

  const [state, setState] = useState<Istate>({ prev: 2, current: 0, next: 1});
  const [userDetected, setUserDetected] = useState<boolean>(false);
  const activateTimer = () => {
    //타이머
    timer = setTimeout(() => {
      stepForward();
    }, 3000);
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
  };

  const flowUp = (onComplete: any) => {
    //시간에 따라 자동적으로 넘길때
    timeline
      .to(elems.current[0], {
        x: "-100%",
        opacity: 0.5,
        onComplete,
      })
      .to(
        elems.current[1],
        {
          x: "-100%",
          opacity: 0.5,
          onComplete,
        },
        "-=0.75"
      )
      .to(
        elems.current[2],
        {
          x: "-100%",
          opacity: 0.5,
          onComplete,
        },
        "-=0.75"
      )
      .to(
        elems.current[3],
        {
          x: "-100%",
          opacity: 0.5,
          onComplete,
        },
        "-=0.75"
      )
      .to(
        elems.current[4],
        {
          x: "-100%",
          opacity: 0.5,
          onComplete,
        },
        "-=0.75"
      )
      .play();
  };

  const fadeOut = (onComplete: any) => {
    //아래 버튼 클릭해서 이동할때
    timeline
      .to(elems.current[0], {
        duration: 0.5,
        opacity: 0.5,
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
  useLayoutEffect(() => {
    const image1 = !!elems.current[0] && elems.current[0];
    const image2 = !!elems.current[1] && elems.current[1];
    const image3 = !!elems.current[2] && elems.current[2];
    const image4 = !!elems.current[3] && elems.current[3];
    const image5 = !!elems.current[4] && elems.current[4];

    activateTimer();

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
        <PromotionItem>
          <PromotionImage
            ref={(elem) => (elems.current[3] = elem)}
            src={data.promotionData[state.prev].imgSrc}
            alt=""
          />
        </PromotionItem>

        <PromotionItem>
          <PromotionImage
            ref={(elem) => (elems.current[4] = elem)}
            src={data.promotionData[state.current].imgSrc}
            alt=""
          />
        </PromotionItem>

        <Stripes>
          {data.promotionData.map((_item, index) =>
            index === state.current ? (
              <Span
                key={`stripe${index}`}
                onClick={() => handleChange(index)}
                style={{ opacity: 1 }}
              ></Span>
            ) : (
              <Span
                key={`stripe${index}`}
                onClick={() => handleChange(index)}
                style={{ opacity: 0.5 }}
              ></Span>
            )
          )}
        </Stripes>
      </PromotionItemWrapper>
      <ControllBarWrapper></ControllBarWrapper>
    </PromotionContainer>
  );
};

export default Promotion;
