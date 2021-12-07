import React from "react";
import styled from "styled-components";
import * as data from "./UtilNavData";
import { AiOutlineSearch } from "react-icons/ai";

const UtilNavComponent = styled.div`
  /* height: 45%; */
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
`;

const UtilNavItemWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
`;

const UtilNavItem = styled.li`
  cursor: pointer;
  padding: 4px 10px;
  height: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const SearchIconWrapper = styled.div`
  width: 34px;
  height: 34px;
  border: 1px solid black;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;

const UtilNavItems = () => {
  return (
    <UtilNavItemWrapper>
      {Object.keys(data.utilNavData).map((i: string, index: number) => (
        <UtilNavItem key={index}>{data.utilNavData[i].title}</UtilNavItem>
      ))}

      <SearchIconWrapper>
        <AiOutlineSearch />
      </SearchIconWrapper>
    </UtilNavItemWrapper>
  );
};

const UtilNav = () => {
  return (
    <UtilNavComponent>
      <UtilNavItems />
    </UtilNavComponent>
  );
};

export default UtilNav;
