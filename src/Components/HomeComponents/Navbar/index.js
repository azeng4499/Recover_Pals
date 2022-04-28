import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Recover / Pals
          </NavLogo>
          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="our-story"
                offset={-180}
                duration={500}
                spy={true}
                exact="true"
                smooth={true}
              >
                Our Story
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="how-we-work"
                offset={-150}
                duration={500}
                spy={true}
                exact="true"
                smooth={true}
              >
                How We Work
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="meet-founders"
                offset={-150}
                spy={true}
                duration={500}
                exact="true"
                smooth={true}
              >
                Meet the Team
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink 
            to="/sign-in" 
            onClick={toggleHome}
            >
              Get Started
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
