import React, { createRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import * as data from "./UtilNavData";
import { AiOutlineSearch } from "react-icons/ai";
import { gsap } from "gsap";

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
const SearchComponentWrapper = styled.div<ISearchIconWrapperProps>`
  background-color: white;
  /* transition: 0.5s ease-in-out; */
  width: auto;
  border: 1px solid #cccccc;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 6px;
  ${(props) => props.isOpen && css``};
`;
const SearchInputBox = styled.input<ISearchIconWrapperProps>`
  height: 20px;
  width: 0px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  transition: 0.2s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      width: 123px;
    `};
`;
const SearchIconWrapper = styled.div`
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;

///interface

interface ISearchIconWrapperProps {
  isOpen: boolean;
}
const UtilNavItems = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchButtonRef: React.RefObject<HTMLInputElement> = createRef();

  //   useEffect(() => {
  //     gsap.to(searchButtonRef.current, {
  //       rotation: "+=360",
  //       x: -100,

  //     });
  //   });

  const search = () => {
    console.log("search");
  };
  return (
    <UtilNavItemWrapper>
      {Object.keys(data.utilNavData).map((i: string, index: number) => (
        <UtilNavItem key={index}>{data.utilNavData[i].title}</UtilNavItem>
      ))}

      <SearchComponentWrapper isOpen={isOpen}>
        <SearchInputBox placeholder=" 통합 검색" isOpen={isOpen} />

        <SearchIconWrapper
          ref={searchButtonRef}
          onClick={() => {
            isOpen ? /*검색*/ search() : setIsOpen(true);
          }}
        >
          <AiOutlineSearch />
        </SearchIconWrapper>
      </SearchComponentWrapper>
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
