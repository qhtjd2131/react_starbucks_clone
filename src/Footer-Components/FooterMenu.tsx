import styled from "styled-components";
import * as data from "./FooterMenuData";

const FooterAwardsBox = styled.section`
  width: 100%;
  background-color: #2c2a29;
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  box-sizing: border-box;
  padding: 40px 80px;
  padding-bottom: 60px;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
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
  margin: 6px 0px;
  font-size: 12px;
  list-style: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterAwards = () => {
  return (
    <FooterAwardsBox>
      <InnerWrapper>
        {Object.keys(data.footerMenuData).map((_key: string, index: number) => (
          <ItemBox key={index}>
            <Title> {data.footerMenuData[_key].name} </Title>
            {data.footerMenuData[_key].values.map((i: data.Ivalue) => (
              <List>{i.title}</List>
            ))}
          </ItemBox>
        ))}
      </InnerWrapper>
    </FooterAwardsBox>
  );
};

export default FooterAwards;
