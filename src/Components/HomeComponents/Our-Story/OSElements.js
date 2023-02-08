import styled from 'styled-components'


export const OSContainer = styled.div`
  color: #fff;
  background: #fff;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;


export const OSWrapper = styled.div`
  display: grid;
  z-index: 1;
  margin-top: 80px;
  height: 550px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    height: 750px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 0px;
    height: 800px;
  }
`;

export const OSRow = styled.div`
    display: grid;
    display-auto-columns: minmax(auto, 1fr);
    align-items: center;

    grid-template-areas: ${({imageStart}) => (imageStart? `'col2 col1'` : `'col1 col2'`)};


    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imageStart}) => (imageStart? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
        padding-bottom: 0px;
    }

`;

export const TopLine = styled.p`
    color: #000;
    font-size: 25px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-family: 'Oswald', sans-serif;
`;


export const Heading = styled.div`
    margin-bottom: 24px;
    font-size: 60px;
    line-height: 1.1;
    font-weight: 600;
    background: linear-gradient(180deg, #e8c25a 0%, #03cffc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    font-family: 'Oswald', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 50px;
    }

    @media screen and (max-width: 480px){
        font-size: 3rem;
    }
`;

export const Subtitle = styled.p`
  max-width: 450px;
  margin-right: 50px;
  font-size: 18px;
  line-height: 30px;
  color: #000;
  font-family: "Oswald", sans-serif;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ImgWrap = styled.div`
  max-width: 570px;
  height: 100%;
`;

export const Img = styled.img`
  height: 530px;
  width: 530px;
  margin: 0 0 40px 0;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    padding-left: 60px;
    height: 300px;
    width: 300px;
  }
`;

