import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const AppWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
};

export default App;
