import React from "react";
import styled from "styled-components";
import { Idropdown } from "./InnerNavData";
import * as data from "./InnerNavDropDownData";

const InnerNavDropDownComponent = styled.div``;

const InnerNavDropDownWrapper = styled.div``;

const InnerNavDropDownItemWrapper = styled.ul``;

const InnerNavDropDownItem = styled.li``;

const InnerNavDropDownItemTitle = styled.label``;

const InnerNavDropDownItemSubTitle = styled.label``;

//interface
interface INavDropdownProps {
  dropdown: Idropdown[];
}
const InnerNavDropDown = ({ dropdown }: INavDropdownProps) => {
    console.log("111",dropdown);
  return (
    <InnerNavDropDownComponent>
      <InnerNavDropDownWrapper>
        {dropdown.map((i : any, index: number) => (
          <InnerNavDropDownItemWrapper
            key={index}
          ></InnerNavDropDownItemWrapper>
        ))}
      </InnerNavDropDownWrapper>
    </InnerNavDropDownComponent>
  );
};

export default InnerNavDropDown;
