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
  background-color: #2c2a29;
  box-sizing: border-box;
  border: none;
  top: 100%;
  left: 0;
  visibility: hidden;
  max-height: 0px;
  transition: visibility 0s, max-height 2s ease-out;

  ${(props) =>
    props.selectedInnerNavItem === props.innerNavItem &&
    css`
      visibility: visible;
      max-height: 1000px;
    `}
`;

const InnerNavDropDownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding-right: 80px;
  box-sizing: border-box;
`;

const InnerNavDropDownItemWrapper = styled.ul`
  padding: 20px;
`;

const InnerNavDropDownItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const InnerNavDropDownItemTitle = styled.label`
  margin: 6px 0px;

  font-size: 18px;
  font-weight: 500;
  color: white;
`;

const InnerNavDropDownItemSubTitle = styled.label`
  color: gray;
  margin: 6px 0px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
`;

const InnerNavDropDownBottom = styled.div`
  background-color: #1d1d1d;
  height: 100px;
`;

const InnerNavDropDownBottomWrapper = styled.div``;

const InnerNavDropDownBottomItem = styled.div``;

const InnerNavDropDownBottomItemTitle = styled.label``;

const InnerNavDropDownBottomItemSubTitle = styled.label``;
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

      <InnerNavDropDownBottom />
    </InnerNavDropDownComponent>
  );
};

export default InnerNavDropDown;
