import styled from "styled-components";
import FooterAwards from "./Footer-Components/FooterAwards";
import FooterCopyright from "./Footer-Components/FooterCopyright";
import FooterMenu from "./Footer-Components/FooterMenu";

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
      <FooterMenu />
      <FooterAwards />
      <FooterCopyright />
    </FooterBox>
  );
};

export default Footer;
