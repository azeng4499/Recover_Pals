import React from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarElements";

const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Recover / Pals</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="/sign-in"
                isBold={props.isSignIn ? true : false}
              >
                Sign In
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/sign-up"
                isBold={props.isSignIn ? false : true}
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
