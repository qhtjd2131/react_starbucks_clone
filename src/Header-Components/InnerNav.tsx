import React, { useState } from "react";
import styled from "styled-components";
import * as data from "./InnerNavData";
import InnerNavDropDown from "./InnerNavDropDown";

//style
const InnerNavComponent = styled.nav`
  height: 55%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: relative;
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

//// interface

const InnerNav = () => {
  const [selectedInnerNavItem, setSelectedInnerNavItem] = useState<
    string | null
  >(null);

  return (
    <InnerNavComponent>
      <InnerNavItemWrapper>
        {Object.keys(data.innerNavItems).map((key: string, index: number) => (
          <>
            <InnerNavItem
              key={index}
              onMouseEnter={() => {
                console.log("enter");
                setSelectedInnerNavItem(key);
              }}
              onMouseLeave={() => {
                console.log("leave");
                setSelectedInnerNavItem(null);
              }}
            >
              {data.innerNavItems[key].title}
            </InnerNavItem>
            <InnerNavDropDown
              dropdown={data.innerNavItems[key].dropdown}
              selectedInnerNavItem={selectedInnerNavItem}
              innerNavItem={key}
            />
          </>
        ))}
      </InnerNavItemWrapper>
    </InnerNavComponent>
  );
};

export default InnerNav;
