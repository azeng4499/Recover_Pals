import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding 5px 24px;
    display: flex;
    flex-direction: colomn;
    justify-direction: center;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: colomn;
    align-items: flex-start;
    justify-content: space-evenly;
    margin: 16px;
    text-align: left;
    width: 480px;
    box-sizing: border-box;
    color: #fff;
    // border: solid;
    // border-color: white;
  

    @media screen and (max-width: 420px){
        margin: 0px;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
  font-family: "Oswald", sans-serif;
  //margin-left: 40px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    margin-left: 15px;
  }
`;




