import React, { useState } from "react";
import styled from "styled-components";
import * as data from "./InnerNavData";
import InnerNavDropDown from "./InnerNavDropDown";

//style
const InnerNavComponent = styled.nav`
  height: 55%;
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
`;
const InnerNavItemWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const InnerNavItem = styled.li`
  cursor: pointer;
  padding: 12px 22px;
  padding-bottom: 40px;
  &:hover {
    color: #669900;
    background-color: #2c2a29;
  }
`;

const DropDownWrapper = styled.div`
  position: absolute;
  width: 100%;
`;
//// interface
interface IselectedInnerNavItem {
  value: string | null;
}

const InnerNav = () => {
  const [selectedInnerNavItem, setSelectedInnerNavItem] =
    useState<IselectedInnerNavItem | null>({ value: null });

  return (
    <InnerNavComponent>
      <InnerNavItemWrapper>
        {Object.keys(data.innerNavItems).map((i: string, index: number) => (
          <>
            <InnerNavItem
              key={index}
              onClick={() => {
                setSelectedInnerNavItem({ value: data.innerNavItems[i].title });
              }}
            >
              {data.innerNavItems[i].title}
            </InnerNavItem>
            {console.log(data.innerNavItems[i].dropdown)}
            <DropDownWrapper>
                <InnerNavDropDown  dropdown={data.innerNavItems[i].dropdown} />
            </DropDownWrapper>
          </>
        ))}
      </InnerNavItemWrapper>
    </InnerNavComponent>
  );
};

export default InnerNav;
