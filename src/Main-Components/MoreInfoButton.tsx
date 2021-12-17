import styled, { css } from "styled-components";

const MoreInfoButtonComponent = styled.button<IMoreInfoButton>`
  width: 144px;
  height: 42px;
  margin-left: 60px;
  color: ${(props) => props.color};
  background-color: transparent;
  border: 2px solid ${(props) => props.color};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    transition: 1s;
    text-decoration: underline;
    background-color: ${(props) => props.color};
    color: ${props=>props.hoverColor ? props.hoverColor: "white"};
  }
`;

interface IMoreInfoButton {
  color: string;
  hoverColor? : string;
}

const MoreInfoButton = ({ color, hoverColor }: IMoreInfoButton) => {
  return (
    <MoreInfoButtonComponent color={color} hoverColor={hoverColor}>자세히 보기</MoreInfoButtonComponent>
  );
};

export default MoreInfoButton;
