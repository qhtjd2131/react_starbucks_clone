# React StarBucks Clone
## 소개

**현재 진행중인 프로젝트 입니다.**


```
**2020/12/02, 프로젝트 제작 완료**
   - main page에서는 한국 인기동영상 리스트를 보여줍니다.
   - 왼쪽 사이드바는 동작하지 않습니다.

```

- Window 환경에서 create-react-app 을 사용하여 Youtube 메인, 검색결과, 동영상 시청 페이지를 클론코딩했습니다.
- Chrome 을 기준으로 개발했기 때문에, 다른 브라우저와 호환이 되지 않을 수 도 있습니다.



<br>

StarBucks : https://www.starbucks.co.kr/index.do <br>
My StarBucks Clone : 


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

**4. React Library**
- **sass** : SCSS를 사용을 위한 라이브러리
   https://sass-lang.com/documentation/js-api
   <br>
- **axios** : youtube API 를 사용을 위한 HTTP 통신 라이브러리
   https://axios-http.com/kr/docs/intro
   <br>
- **react-youtube** : Youtube 동영상을 iframe 으로 반환하여 별도의 커스텀 없이 동영상 플레이어 컴포넌트를 사용.
   https://www.npmjs.com/package/react-youtube
   <br>
- **react-icons** : youtube에서 사용되는 아이콘을 대체할 수 있는 아이콘 제공
   https://react-icons.github.io/react-icons/ 
   https://www.npmjs.com/package/react-icons 
   <br>
- **react-router-dom v6** : Link, Router, queryString 지원.(페이지 이동 효과를 위해 사용), 이 문서에서는 version 6 를 사용함.
   https://reactrouter.com/docs/en/v6/getting-started/overview
   https://reactrouter.com/docs/en/v6/upgrading/v5 (v5와 달라진 점)
   <br>
- **gh-pages** github의 호스팅 서비스 이용하기
   https://www.npmjs.com/package/gh-pages
   <br>

---

### Components Structure
![bbb drawio](https://user-images.githubusercontent.com/34260967/143530854-28281361-5657-4324-8de8-052ba67ddfb5.png)

![temp drawio](https://user-images.githubusercontent.com/34260967/143534852-296c94f5-3b6f-4561-b51d-ba20a0a0f26f.png)
- Header, SideBar 은 fixed 요소임.

---

### Dependencies
```javascript
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.24.0",
    "gh-pages": "^3.2.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-router-dom": "^6.0.2",
    "react-scripts": "4.0.3",
    "react-youtube": "^7.13.1",
    "sass": "^1.43.4",
    "web-vitals": "^1.0.1"
  }
```
---

## 동작 원리 및 구현 내용

### 1. 버튼 부가 설명 컴포넌트


---

## 이번 프로젝트를 하면서..



---

## 향후 계획


