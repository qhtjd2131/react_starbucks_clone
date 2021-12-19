import styled from "styled-components";
import FooterMenu from "./Footer-Components/FooterAwards";
import FooterAwards from "./Footer-Components/FooterMenu";

const FooterBox = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterBox>
      FOOTER
      <FooterMenu />
      <FooterAwards />
    </FooterBox>
  );
};

export default Footer;
