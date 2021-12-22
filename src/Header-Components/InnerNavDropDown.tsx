import styled, { css } from "styled-components";
import { Ibottom, Idropdown } from "./InnerNavData";

const InnerNavDropDownComponent = styled.div<{
  selectedInnerNavItem: string | null;
  innerNavItem: string;
}>`
  cursor: default;
  position: absolute;
  width: 100vw;
  transform: translateX(calc((-100vw + 1200px) / 2));

  overflow: hidden;
  background-color: #2c2a29;
  box-sizing: border-box;
  border: none;
  top: 100%;
  left: 0;
  visibility: hidden;

  max-height: 0px;
  transition: visibility 0s, max-height 1.8s ease-out;
  z-index: 999;

  ${(props) =>
    props.selectedInnerNavItem === props.innerNavItem &&
    css`
      visibility: visible;
      max-height: 1500px;
    `}
`;

const InnerNavDropDownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding-right: 80px;
  padding-left: 80px;
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
  margin: 8px 0px;

  font-size: 17px;
  font-weight: 400;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const InnerNavDropDownItemSubTitle = styled.label`
  color: gray;
  margin: 6px 0px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const InnerNavDropDownBottom = styled.div`
  background-color: #1d1d1d;
`;

const InnerNavDropDownBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  box-sizing: border-box;
`;

const InnerNavDropDownBottomItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 8px 0px;
  line-height: 20px;
`;

const InnerNavDropDownBottomItemTitle = styled.label`
  color: gray;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const InnerNavDropDownBottomItemSubTitle = styled.label`
  color: #64a716;
`;
//interface
interface INavDropdownProps {
  dropdown: Idropdown[];
  selectedInnerNavItem: string | null;
  innerNavItem: string;
  bottom: Ibottom[];
}

interface DropDownBottomProps {
  bottom: Ibottom[];
}
const DropDownBottom = ({ bottom }: DropDownBottomProps) => {
  return (
    <InnerNavDropDownBottom>
      <InnerNavDropDownBottomWrapper>
        {bottom.map((i, index) => (
          <InnerNavDropDownBottomItem key={index}>
            <InnerNavDropDownBottomItemTitle>
              {i.title}
            </InnerNavDropDownBottomItemTitle>
            <InnerNavDropDownBottomItemSubTitle>
              {i.subTitle}
            </InnerNavDropDownBottomItemSubTitle>
          </InnerNavDropDownBottomItem>
        ))}
      </InnerNavDropDownBottomWrapper>
    </InnerNavDropDownBottom>
  );
};
const InnerNavDropDown = ({
  dropdown,
  selectedInnerNavItem,
  innerNavItem,
  bottom,
}: INavDropdownProps) => {
  //   console.log("selected :", selectedInnerNavItem);
  //   console.log("navitem:", innerNavItem);
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
      <DropDownBottom bottom={bottom} />
    </InnerNavDropDownComponent>
  );
};

export default InnerNavDropDown;
