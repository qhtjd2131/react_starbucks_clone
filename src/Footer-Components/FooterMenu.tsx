import styled from "styled-components";
import * as data from "./FooterMenuData";

const FooterMenuBox = styled.section`
  width: 100%;
  background-color: #2c2a29;
  position: relative;
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  box-sizing: border-box;
  padding: 40px 60px;
  padding-bottom: 60px;
  min-width: 760px;

  @media only screen and (max-width: 1180px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: flex-start;
`;
const Title = styled.ul`
  margin: 12px 0px;
  list-style: none;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.li`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const SubTitle = styled.div`
  width: auto;
  margin: 6px 0px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const FooterLogo = styled.img`
  position: absolute;
  top: 40px;
  right: 10%;
`;
const FooterMenu = () => {
  return (
    <FooterMenuBox>
      <InnerWrapper>
        {Object.keys(data.footerMenuData).map((_key: string, index: number) => (
          <ItemBox key={index}>
            <Title> {data.footerMenuData[_key].name} </Title>
            {data.footerMenuData[_key].values.map((i: data.Ivalue, index) => (
              <List key={index}>
                <SubTitle>{i.title}</SubTitle>
              </List>
            ))}
          </ItemBox>
        ))}
      </InnerWrapper>
      <FooterLogo src="/images/footer_logo.png" alt="" />
    </FooterMenuBox>
  );
};

export default FooterMenu;
