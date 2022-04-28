import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { BsFillChatFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase";
import { signOut } from "firebase/auth";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  LinkContainer,
} from "./DashNavComponents";

const DashNav = () => {
  const navigate = useNavigate();

  const logoOnClick = () => {
    navigate("/dashboard");
  };

  const logOutOnClick = async () => {
    try{
      await signOut(auth);
    } catch {}

    navigate("/sign-in");
  };

  return (
    <Nav>
      <NavbarContainer>
        <BiLogOutCircle size="2.5em" color="white" onClick={logOutOnClick} />
        <NavLogo onClick={logoOnClick}>Recover / Pals</NavLogo>
        <LinkContainer to="/chatroom">
          <BsFillChatFill size="2.5em" color="white" />
        </LinkContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default DashNav;
