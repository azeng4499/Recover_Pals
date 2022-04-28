import React from 'react'
import { FaReact, FaYoutube } from 'react-icons/fa' 
import { SiJavascript, SiStyledcomponents, SiFirebase } from "react-icons/si"; 
import { FiInstagram } from 'react-icons/fi' 
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle
} from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Follow our journey on</FooterLinkTitle>
                <FooterLinkTitle>
                  <FiInstagram />
                </FooterLinkTitle>
                <FooterLinkTitle>
                  <AiFillFacebook />
                </FooterLinkTitle>
                <FooterLinkTitle>
                  <FaYoutube />
                </FooterLinkTitle>
                <FooterLinkTitle>
                  <AiFillLinkedin />
                </FooterLinkTitle>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Made with</FooterLinkTitle>
                <FooterLinkTitle>
                  <SiJavascript />
                </FooterLinkTitle>
                <FooterLinkTitle>
                  <FaReact />
                </FooterLinkTitle>
                <FooterLinkTitle>
                  <SiStyledcomponents size="1.5em" />
                </FooterLinkTitle>
                <FooterLinkTitle>
                  <SiFirebase />
                </FooterLinkTitle>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer