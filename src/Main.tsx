import styled from "styled-components";
import MainItem1 from "./Main-Components/MainItem";
import Notice from "./Main-Components/Notice";
import Promotion from "./Main-Components/Promotion";
import Rewards from "./Main-Components/Rewards";

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
      <Promotion />
      <Rewards />
    </MainWrapper>
  );
};

export default Main;
