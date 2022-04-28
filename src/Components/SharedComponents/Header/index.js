import React from "react";

import{
    HeaderContainer,
    HeaderWrapper,
    HeaderH1,
} from './HeaderComponents'

const Header = (props) => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderH1>{props.message}</HeaderH1>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
