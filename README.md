# React StarBucks Clone

## 소개

_~~현재 진행중인 프로젝트 입니다.~~_

```
**2020/12/21, 1.00v 프로젝트 완료
   - Starbucks main page 구현
   - Header navigation animation 구현 (라이브러리 사용 x)
   - Main의 첫번째 컴포넌트 animation 구현(라이브러리 사용 x)
   - scroll에 따른 animation 구현 (라이브러리 사용 o)

**2020/12/22, 1.01v 수정
   - HeaderBar Component 길이 제한으로 인해 메뉴 Dropdown 스타일링이 깨지는 현상 수정

**2020/12/23, 1.02v 수정
   - 배포 시 이미지 로딩 안되는 현상 수정
   - 공지사항에 마우스 올릴 시 생성되는 underline이 가려지는 현상 수정

**2020/12/25, 1.03v 수정
  - HeaderBar의 InnerNavDropdwon 컴포넌트 1200px 미만일때 스타일 깨지는 현상 수정

```

- Window 환경에서 create-react-app 을 사용하여 STARBUCKS 메인 페이지를 클론코딩했습니다.
- Chrome 을 기준으로 개발되었습니다. 다른 브라우저와 호환이 되지 않을 수 도 있습니다.
- Window Size는 Large, Xlarge size 만을 반응형으로 구현하였습니다. 따라서 모바일이나 작은 화면에서 컴포넌트가 뭉개질 수 있습니다.
- 본 프로젝트는 react 환경에서 animation 구현과 이에 관련된 gsap 라이브러리 학습을 위해 진행되었습니다.
- STARBUCKS Main Page의 디자인만 구현되어 있습니다. 특정 링크나, 검색기능은 동작하지 않습니다!
  <br>

### Preview

![image](https://user-images.githubusercontent.com/34260967/147048695-5b04dd2b-2b69-466e-92ab-db83d38adf5f.png)

StarBucks : https://www.starbucks.co.kr/index.do <br>(2021년도 크리스마스 버전이 아닐 수도 있습니다.)<br>

My StarBucks Clone : https://qhtjd2131.github.io/react_starbucks_clone<br>

---

### 시작하기

```
npm install
npm run start
```

---

### 기술 스택

**1. HTML5**

**2. CSS3**

- Styled-Components 사용

**3. CRA (create-react-app)**
(auto installed by CRA)

- webpack (bundler)
- babel (trans-compiler)
- others..

**4. TypeScript**

- TypeScript 공식문서 :<br> https://www.typescriptlang.org/ko/docs/handbook/react.html
- React TypeScript CheatSheet :<br> https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example<br>

**5. React Library**

- **typescript** : typescript 사용
  <br>
- **gsap** : 효율적인 Animation 구현을 위한 라이브러리.(실제 startbucks에서 사용)<br>
  https://greensock.com/docs/
  <br>
- **@types/styled-components** : typescript 환경에서 styled-components 라이브러리 사용<br>
  https://styled-components.com/docs/api#typescript
  <br>
- **gh-pages** : github의 호스팅 서비스 이용하기<br>
  https://www.npmjs.com/package/gh-pages
  <br>

---

### Components Structure

![starkbucks1](https://user-images.githubusercontent.com/34260967/147243621-e3ff2829-aae4-4a8b-9132-300912d91b46.jpg)

![starbucks2](https://user-images.githubusercontent.com/34260967/147243946-663f8c55-6bdd-437b-8d91-d86021806580.jpg)
<br>

- Header은 fixed 요소임.

---

### Dependencies

```javascript
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/gsap": "^3.0.0",
    "@types/jest": "^27.0.3",
    "@types/node": "^16.11.11",
    "@types/react": "^17.0.37",
    "@types/react-dom": "^17.0.11",
    "@types/react-router-dom": "^5.3.2",
    "gh-pages": "^3.2.3",
    "gsap": "^3.8.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-router-dom": "^6.0.2",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.3",
    "typescript": "^4.5.2",
    "web-vitals": "^1.0.1"
  },
```

---
## 동작 원리 및 구현 내용

### 1. Animation


<br>
**Animation 1 (라이브러리 사용 x)**<br>
![ezgif com-gif-maker (17)](https://user-images.githubusercontent.com/34260967/147247933-d1cfcf14-eb5a-4aea-b23b-1d239eb563b0.gif)

해당 애니메이션은 학습목적으로 의도적으로 라이브러리 없이 css의 스타일로만 구현하였다. css의 `transition-delay` 속성을 활용하여 0.5초 간격으로 `<Image>` 컴포넌트를 랜더링한다.

만약 이렇게만 구현한다면, 의도한 animation이 나오지 않을것이다. 그 이유는 `transition-delay` 속성은 `transition`이 되는 시점이라는 timeline이 필요하다. 원하는 시점에서 `transition`이 되지 않는다면, `delay`또한 작동하지 않는다.

이 애니메이션은 웹사이트 접속 시 가장 처음 실행되는 Animation 이다. 따라서 `useState` hook을 사용하여 웹페이지가 처음 렌더링 될때, `state`를 바꾸어 `transition`을 일으켜 주었다.
(style 속성이 `state`가 바뀜을 인지하기 위해선 `styled-component`라이브러리를 사용해야한다.)

```javascript
const Image = styled.img<{
   isRender: boolean;
}>`
   opacity : 0;

   ${(props) =>
    props.isRender &&
    css`
      opacity: 1;
    `};
`;

const [isRender, setIsRender] = useState<boolean>(false);
  useEffect(() => {
    setIsRender(true);
  }, []);
```

**Animation 2 : ScrollTrigger Animation (라이브러리 사용 O)**<br>

video link<br>
https://user-images.githubusercontent.com/34260967/147247476-3b826781-64b3-43ed-aef1-a084242f8644.mp4
<br><br>
![ezgif com-gif-maker (16)](https://user-images.githubusercontent.com/34260967/147247731-d01ffa01-f039-4778-8deb-49cc4eafcac0.gif)
<br>

해당 애니메이션은 **GSAP의 ScrollTrigger Plugin**을 사용하였다. ScrollTrigger을 사용하면 해당 컴포넌트를 참조하여 컴포넌트의 scroll 시작과 끝위치를 알 수 있다. 컴포넌트의 시작지점에 scroll이 도착하면 지정된 animation 을 실행시킬 수 있다.<br>https://greensock.com/scrolltrigger/



### 2. Notice 무한 반복


![ezgif com-gif-maker (19)](https://user-images.githubusercontent.com/34260967/147250468-ad8c7e56-4611-426f-ae83-97a5225c7aaf.gif)
<br>

해당 이펙트는 아이템 컴포넌트 모두를 `position : absolute`속성을 이용하여 아래에 위치시키고, 차례가되면 `top`속성을 변화시켰다.
<br>

![image](https://user-images.githubusercontent.com/34260967/147279652-72dbd5cc-6136-4f9f-8bf3-807218a21dab.png)
<br>

보여지고 있는 현재의 아이템을 그다음 아이템이 올라오면서 가려야한다. 이 때, 원래 올라와 있던 아이템은 다시 내려가야하는데, 동시에 내려가게되면 의도와 다르게 가려지는 이펙트가 발생하지 않는다. 그래서 현재의 아이템은 바로 다음이 아닌 2번째 이후의 아이템이 올라올 때, 내려가게 구현하였다. (즉, 위에 위치하는 아이템의 갯수는 2개)
<br>

### 3. Promotion

![ezgif com-gif-maker (18)](https://user-images.githubusercontent.com/34260967/147250297-1618d1f1-c7d5-449e-b591-ef0b65aaebee.gif)

`<Promotion>`은 3개의 `Promotion Item`을 가진다. 이 `Items`이 슬라이딩되면서 focusing 받는 효과를 구현하기위해 나는 아래와 같은 구성으로 만들었다.

![starbucks_promotion](https://user-images.githubusercontent.com/34260967/147282667-60595326-ea8d-41b5-8de1-84b5e7cbfb76.jpg)

그리고 현재 화면에 보여지는 인덱스를 가지는 `state` 와 그 다음 인덱스를 계산하는 `calculateIndex()` 를 만들었다.

```javascript
const [state, setState] = useState<Istate>({ prev: 2, current: 0, next: 1 });

const calculateIndexs: IcalculateIndexs = (index: number) => {
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

```

이 다음 sliding animation을 구현하기위해 **gsap** 을 활용하였다. gsap은 기본적으로 컴포넌트의 ref를 참조하여 사용한다. 따라서 `useRef`를 사용하여 애니메이션이 필요한 모든 컴포넌트의 ref를 가져와야한다.

**gsap**을 이용하여 5개의 아이템을 모두 원하는 방향으로 x를 100% 만큼 옮기면 sliding animation이 구현된다. 

![starbucks_promotion (4)](https://user-images.githubusercontent.com/34260967/147284731-72884064-2cf2-48f2-9b0d-ceabb0fbc81c.jpg)
<br>

![starbucks_promotion (3)](https://user-images.githubusercontent.com/34260967/147284667-0ae60770-8333-4d51-a6d4-fcc473dc4e1c.jpg)
<br>

이제 컴포넌트는 이러한 상태가 되는데, 이 때 `calculateIndex()`를 이용하여 계산된 `state`에 따라, 컴포넌트를 리렌더링했다.
<br>
![starbucks_promotion (6)](https://user-images.githubusercontent.com/34260967/147284973-7c940e99-d1e6-4388-9e20-26a73249ad94.jpg)

위의 동작은 `setTimeOut`을 사용하여 특정 시간마다 반복하거나, 버튼 클릭시 실행하게 된다면 의도하는 효과를 구현 할 수 있게된다!


## 겪었던 어려움

### 1. scrollTrigger

scrollTrigger의 기능이 동작하지 않는 문제가 있었고, 이를 대소문자 변경으로 간단하게 해결하였다.(실제로는 한시간정도 걸렸다..) 해결 내용은 다음과 같다.

- ScrollTrigger : ScrollTrigger 기능을 담당하는 gsap 플러그인
- scrollTrigger : scrollTrigger 기능의 설정을 담당하는 변수

변수를 써야할 때, 플러그인을 사용하였기 때문에 기능이 동작하지 않았다.

gsap 포럼에 검색을 하던 중 동일한 문제를 겪었지만, 해결책이 제시되지 않은 게시물 발견하였다. 그래서 회원가입을 하고, 해결법을 공유하였다.
 https://greensock.com/forums/topic/24456-markers-and-scrolltrigger-not-working/



### 2. TypeScript (TS2769) : setTimeout()의 타입


ERROR
```
이 호출과 일치하는 오버로드가 없습니다.
오버로드 1/2('(timeoutId: Timeout): void')에서 다음 오류가 발생했습니다.
'Timeout | null' 형식의 인수는 'Timeout' 형식의 매개 변수에 할당될 수 없습니다.
'null' 형식은 'Timeout' 형식에 할당할 수 없습니다.
오버로드 2/2('(handle?: number | undefined): void')에서 다음 오류가 발생했습니다.
'Timeout | null' 형식의 인수는 'number | undefined' 형식의 매개 변수에 할당될 수 없습니다.
'null' 형식은 'number | undefined' 형식에 할당할 수 없습니다.

```

CODE
```
//TypeScript: TS2769
let timer: ReturnType<typeof setTimeout> | null = null;

timer = setTimeout(() => {
      stepForward();
    }, 2000);

clearTimeout(timer) // error ts:2769
```

**해당 오류는 `clearTimeout()`의 인수(파라미터)의 필요타입과 실제타입이 달라서 발생하는 문제이다.**

`clearTimeout()`의 인수가 되는 `timer`는 `setTimeout()`의 return type이 포함되어야 하고, 이러한 `setTimeout()` 에는 두 종류가 있다.
- **window.setTimeout()** : 리턴타입이 `number` 이다.
browser 기반 javascript 에서만 동작한다. 만약에 window 객체가 정의 되지 않는다면, 동작하지 않는다. 예를들어 server side rendering을 할 때 window 객체가 정의 되지 않으므로 동작하지 않는다.
(https://developer.mozilla.org/ko/docs/Web/API/setTimeout)
<br>
- **NodeJS.setTimeout()** : 리턴타입이 `NodeJS.Timeout` 이다.
ReturnType<typeof setTimeout> 을 이용하여 타입을 지정할 수 있다. 이렇게 한다면 플랫폼과 상관없이 기능을 동작시킬 수있다. 따라서 이 방법을 추천한다.
(https://nodejs.org/ko/docs/guides/timers-in-node/#node-js-timers)



 `clearTimeout()`의 인수는 `number | undefined` 타입이어야 한다. 
 `timer`는 `Timeout | null` 타입을 가진다.

`NodeJS.setTimeout()`의 Timeout type 은 console로 출력하면 `number` 타입으로 나오는듯이 자동으로 변환되지만, 초기설정값을 `null`로 주면서 `null` 타입이 충돌을 일으키는 것이다.
(`setTimeout()`의 return 값의 type을 출력해보면 `number` 이지만, `timer의` 타입을 `number`로 지정하면 오류가 발생한다.)

이 때 발생한 오류는 type error 이기 때문에 논리적으로 `null` 값을 피하더라도 해당 오류는 계속 된다. 그래서 typescript의 **non-null-assertion-operator** 을 사용해야한다.
참고 :(typescript non-null-assertion-operator) https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator

이 기능은 해당하는 값이 `null` 이 아니고 정의되지 않은 값이라고 컴파일러에게 알려준다. 따라서 `null` 타입을 해당 경우에서 제외 시키고, 오류를 해결할 수 있다.


### 2. useEffect() : missing dependency warning

animation 을 위해 사용한 `useEffect()` 에서 발생한 `ref`의 missing dependency warning.

gsap animation 은 컴포넌트의 `ref`를 직접 참조하여 노드를 컨트롤한다. 이 때 `useEffect()`에 필수적으로 `ref`가 들어가지만, 의도적으로 의존성배열에 빈배열을 넣었다. 이 때, warning이 발생하는 근본적인 원인을 없앨 수 있을까 생각하고 구글링을 하여 해결책을 찾았다.

**해결책 : `createRef`를 `useRef`로 변경.**
**이유** : **`createRef`는 불변성을 보장하지 못하지만, `useRef`는 React가 불변성을 보장해준다.** 자세하게는 `createRef`는 컴포넌트가 리랜더링 될 때, `null`을 참조하였다가 다시 해당 컴포넌트를 참조한다. 하지만 `useRef`는 리랜더링 되더라도 같은 컴포넌트나 값을 참조하는것이 보장된다. 이러한 특성 때문에 `createRef` 보다 `useRef`가 컴포넌트 뿐만 아니라 특정 값을 유지하는데에도 사용된다.

## 이번 프로젝트를 하면서..
- TypeScript의 기본 사용 방법
- TypeScript의 필요성
- TypeScript : non-null-assertion-operator 
- ReactJS Animaition 생태계 파악
- GSAP Library 사용법
- GSAP Library 기본 원리
- GSAP Library ScrollTrigger 사용
- 슬라이딩하며 무한으로 순환하는 아이템 원리(Promotion Component)
- createRef와 useRef의 차이
- setTimeout()의 종류별 특징

---

## 향후 계획
- Gatsby 사용하여 블로그 제작
- 블로그에 프로젝트 정리해보기


