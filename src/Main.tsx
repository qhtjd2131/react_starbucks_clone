import styled from "styled-components";
import MainItem1 from "./Main-Components/MainItem1";
import Notice from "./Main-Components/Notice";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = () => {
  return (
    <MainWrapper>
      <MainItem1 />
      <Notice />
    </MainWrapper>
  );
};

export default Main;
