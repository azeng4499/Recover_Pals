import React from "react";
import Video from "../../../videos/hero_background.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Recover Together.</HeroH1>
        <HeroP>
          Connect with someone who understands today.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
