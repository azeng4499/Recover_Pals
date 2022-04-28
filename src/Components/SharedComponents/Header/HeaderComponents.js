import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 250px;
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

  @media screen and (max-width: 480px) {
    margin-top: 10px;
    padding: 0 0px;
  }
`;

export const HeaderWrapper = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const HeaderH1 = styled.h1`
  //color: #000;
  font-size: 5rem;
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
    font-size: 3rem;
  }
`;
