import { string } from "prop-types";
import React from "react";
import styled from "styled-components";
import * as data from "./InnerNavData";

const InnerNavComponent = styled.nav`
  height: 55%;
  width: 100%;
  border: 1px solid black;

  display: flex;
`;
const ItemWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Item = styled.li`
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

const InnerNav = () => {
  return (
    <InnerNavComponent>
      <ItemWrapper>
        {Object.keys(data.innerNavItems).map((i, index) => (
          <Item key={index}>{data.innerNavItems[i].title + " ---- "}</Item>
        ))}
      </ItemWrapper>
    </InnerNavComponent>
  );
};

export default InnerNav;
