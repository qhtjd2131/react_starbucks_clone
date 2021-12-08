import React from "react";
import styled from "styled-components";
import * as data from "./InnerNavDropDownData";


const InnerNavDropDownComponent = styled.div`

`;

const InnerNavDropDownWrapper = styled.div`

`;

const InnerNavDropDownItemWrapper = styled.ul`

`

const InnerNavDropDownItem = styled.li`

`

const InnerNavDropDown = () => {
  return <InnerNavDropDownComponent> 
      <InnerNavDropDownWrapper>
          {
              Object.keys(data.innerNavDropDownItem).map(()=>(
                  <InnerNavDropDownItemWrapper>

                      </InnerNavDropDownItemWrapper>
              ))
          }
      </InnerNavDropDownWrapper>
  </InnerNavDropDownComponent>;
};

export default InnerNavDropDown;
