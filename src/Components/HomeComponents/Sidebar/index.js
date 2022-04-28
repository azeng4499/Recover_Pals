import React from 'react'
import { SidebarContainer,
         Icon, 
         CloseIcon,
         SidebarWrapper,
         SidebarMenu,
         SidebarLink,
         SideBtnWrap,
         SidebarRoute
    } from './SidebarElements'  

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="our-story" offset={-50} onClick={props.toggle}>
            Our Story
          </SidebarLink>
          <SidebarLink to="how-we-work" offset={-80} onClick={props.toggle}>
            How We Work
          </SidebarLink>
          <SidebarLink to="meet-founders" offset={-80} onClick={props.toggle}>
            Meet the Team
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/sign-in" onClick={props.toggle}>
            Get Started
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;