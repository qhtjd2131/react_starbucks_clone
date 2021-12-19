import styled from "styled-components";

const FindStoreBox = styled.div`
  background-image: url("/images/store_bg.jpg");
  width: 100%;
  height: 400px;
`;

const ImageWrapper = styled.div``;

const Image1 = styled.img``;
const Image2 = styled.img``;
const DecoImage1 = styled.img``;
const DecoImage2 = styled.img``;

const Text1 = styled.img``;
const Text2 = styled.img``;
const FindButton = styled.button``;

const FindStore = () => {
  return (
    <FindStoreBox>
      <ImageWrapper>
        <Image1 src="/images/store_exp_img01.png" alt="" />
        <Image2 src="/images/store_exp_img02.png" alt="" />
      </ImageWrapper>
      <DecoImage1 src="/images/store_exp_img03.png" alt="" />
      <DecoImage2 src="/images/store_exp_img04.png" alt="" />
      <Text1 src="/images/store_txt01.png" alt="" />
      <Text2 src="images/store_txt02.png" alt="" />
      <FindButton>매장 찾기</FindButton>
    </FindStoreBox>
  );
};

export default FindStore;
