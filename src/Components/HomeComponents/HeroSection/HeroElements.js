import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%; rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180ged, rgab(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

`;

export const VideoBg = styled.video`
  width: 100vw;
  height: 100vh;

  object-fit: cover;
  //object-position: center center;
  //background-position:center;

    // right: 0;
    // bottom: 0;
    max-width: 100vw;
    max-height: 110vh;
    min-width: 100vw;
    min-height: 110vh;
    // transform: translateX(calc((100% - 100vw) / 2));
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  font-size: 140px;
  text-align: center;
  font-family: "Oswald", sans-serif;
  background: linear-gradient(180deg, #e8c25a 0%, #03cffc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 80px;
  }

  @media screen and (max-width: 480px) {
    font-size: 80px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 45px;
  text-align: center;
  max-width: 800px;
  font-family: "Oswald", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
