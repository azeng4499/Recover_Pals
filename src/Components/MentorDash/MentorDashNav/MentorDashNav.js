import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase";
import { signOut } from "firebase/auth";
import styled from 'styled-components'

import {
  Nav,
  NavbarContainer,
  NavLogo,
} from "../../DashboardComponents/DashNav/DashNavComponents";

const DashNav = () => {
  const navigate = useNavigate();

  const logOutOnClick = async () => {
    try {
      await signOut(auth);
    } catch {}

    navigate("/sign-in");
  };

  const Text = styled.div`
    font-size: 30px;
    color: white;
  `;

  return (
    <Nav>
      <NavbarContainer>
        <BiLogOutCircle size="2.5em" color="white" onClick={logOutOnClick} />
        <NavLogo >Recover / Pals</NavLogo>
            <Text>
                Mentor Portal
            </Text>
      </NavbarContainer>
    </Nav>
  );
};

export default DashNav;
