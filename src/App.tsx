import React from "react";
import styled from "styled-components";
import Header from "./Header";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: orange;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
};

export default App;
