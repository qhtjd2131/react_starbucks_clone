import React from "react";
import styled, { css } from "styled-components";
import { Idropdown } from "./InnerNavData";

const InnerNavDropDownComponent = styled.div<{
  selectedInnerNavItem: string | null;
  innerNavItem: string;
}>`
  position: absolute;
  width: 100%;
  overflow: hidden;
  background-color: gray;
  box-sizing: border-box;
  border: none;
  top: 100%;
  visibility: hidden;
  max-height : 0px;
  transition: visibility 0s, max-height 2s ease-out;

  ${(props) =>
    props.selectedInnerNavItem === props.innerNavItem &&
    css`
      visibility: visible;
      max-height : 1000px;
    `}
  ${(props) =>
    !(props.selectedInnerNavItem === props.innerNavItem) &&
    css`
        
    `}
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
  selectedInnerNavItem: string | null;
  innerNavItem: string;
}
const InnerNavDropDown = ({
  dropdown,
  selectedInnerNavItem,
  innerNavItem,
}: INavDropdownProps) => {
  console.log("selected :", selectedInnerNavItem);
  console.log("navitem:", innerNavItem);
  return (
    <InnerNavDropDownComponent
      selectedInnerNavItem={selectedInnerNavItem}
      innerNavItem={innerNavItem}
    >
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
