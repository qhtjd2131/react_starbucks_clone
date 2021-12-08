import React from "react";
import styled from "styled-components";
import { Idropdown } from "./InnerNavData";

const InnerNavDropDownComponent = styled.div`
  position: absolute;
  width: 100%;
  height: 0px;
  background-color: gray;

  box-sizing: border-box;
  border: none;
  top: 100%;

`;

const InnerNavDropDownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`;

const InnerNavDropDownItemWrapper = styled.ul``;

const InnerNavDropDownItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const InnerNavDropDownItemTitle = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

const InnerNavDropDownItemSubTitle = styled.label`
  font-size: 10px;
  display: flex;
  flex-direction: column;
`;

//interface
interface INavDropdownProps {
  dropdown: Idropdown[];
}
const InnerNavDropDown = ({ dropdown }: INavDropdownProps) => {
  return (
    <InnerNavDropDownComponent>
      <InnerNavDropDownWrapper>
        {dropdown.map((i: Idropdown, index: number) => (
          <InnerNavDropDownItemWrapper key={index}>
            <InnerNavDropDownItem>
              <InnerNavDropDownItemTitle>{i.title}</InnerNavDropDownItemTitle>
              {i.subTitle.map((subtitle, index) => (
                <InnerNavDropDownItemSubTitle key={index}>
                  {subtitle.value}
                </InnerNavDropDownItemSubTitle>
              ))}
            </InnerNavDropDownItem>
          </InnerNavDropDownItemWrapper>
        ))}
      </InnerNavDropDownWrapper>
    </InnerNavDropDownComponent>
  );
};

export default InnerNavDropDown;
