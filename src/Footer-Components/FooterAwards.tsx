import styled from "styled-components";

const FooterAwardsBox = styled.section`
  width: 100%;
  background-color: #282828;
`;

const InnerWrapper2 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  box-sizing: border-box;
  padding: 0px 60px;
  @media only screen and (max-width: 1180px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AwardItems = styled.div``;

const Item = styled.div``;

const AwardImage = styled.img``;

const image_src = [
  "/images/t_footer_award23.jpg",
  "/images/t_footer_award24.jpg",
  "/images/t_footer_award25.jpg",
  "/images/t_footer_award26.jpg",
  "/images/t_footer_award27.jpg",
  "/images/t_footer_award28.jpg",
];
const FooterAwards = () => {
  return (
    <FooterAwardsBox>
      <InnerWrapper2>
        {image_src.map((src, index) => (
          <AwardItems key={index}>
            <Item>
              <AwardImage src={src} alt="" />
            </Item>
          </AwardItems>
        ))}
      </InnerWrapper2>
    </FooterAwardsBox>
  );
};

export default FooterAwards;
