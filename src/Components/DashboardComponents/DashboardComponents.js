import styled from "styled-components";

export const DashContainer = styled.div`
  height: calc(100vh);
  width: 100vw;
  background: #bdf9ff;
  justify-content: center;
  align-items: center;
  display: flex;

  @media screen and (max-width: 480px) {
    height: 100vh;
    width: 100vw;
  }
`;

export const DashWrapper = styled.div`
  position: absolute;

`;

export const Card = styled.div`
  background: white;
  border-radius: 30px;
  border: solid;
  border-width: 2px;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  height: 600px;
  padding 18px;
  transition: all 0.2s ease-in-out;
  width: 400px;

  @media screen and (max-width: 480px) {
    height: 500px;
    width: 300px;
  }
`;

export const TopContainer = styled.div`
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
  width: 360px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 264px;
  }
`;

export const PictureContainer = styled.div`
  height: 360px;
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 264px;
    width: 264px;
  }
`;

export const CardPicture = styled.img`
  height: 340px;
  width: 340px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    height: 264px;
    width: 264px;
  }
`;

export const BottomContainer = styled.div`
  height: 120px;
  width: 360px;

  @media screen and (max-width: 480px) {
    width: 264px;
  }
`;

export const BottomContainerSection1 = styled.div`
  height: 90px;
  width: 360px;
  padding-left: 10px;
  font-family: "Oswald", sans-serif;
  font-size: 15px;
  padding-right: 10px;
  border-bottom: solid;
  margin-bottom: 5px;
  align-text: center;

  @media screen and (max-width: 480px) {
    width: 264px;
    font-size: 12px;
    padding-top: 5px;
  }
`;

export const BottomContainerSection2 = styled.div`
  height: 40px;
  width: 360px;
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  align-text: center;

  @media screen and (max-width: 480px) {
    width: 264px;
    font-size: 15px;
  }
`;

export const CardTextH1 = styled.div`
  font-size: 40px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const TextH1 = styled.div`
  font-size: 35px;
  font-family: "Oswald", sans-serif;
  text-align: center;
  font-weight: bold;
`;

export const CardTextP2 = styled.div`
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  justify-content: right;
  font-style: italic;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const CardTextH2 = styled.div`
  font-size: 30px;
  font-family: "Oswald", sans-serif;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  // font-style: italic;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
