import styled from 'styled-components'

export const HWWContainer = styled.div`
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px){
        height: 1000px;
    }

    @media screen and (max-width: 480px) {
        height: 1050px;
    }
`;

export const HWWWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

export const HWWCard = styled.div`
    border-style: solid;
    // background: linear-gradient(white, white) padding-box, 
    // linear-gradient(180deg, #e8cf8b, #03cffc) border-box;
    border-width: 2px;
    //border-color: transparent;
    border-radius: 10px;


    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 400px;
    padding 30px;
    //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        background: linear-gradient(180deg, #e8cf8b 0%, #03cffc 100%);
        border-color: white;
    }

    
`;

export const HWWIcon = styled.img`
    height: 230px;
    width: 230px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px){
        height: 90px;
        width: 90px;
    }

    @media screen and (max-width: 480px){
        height: 90px;
        width: 90px;
    }
`;

export const HWWH1 = styled.div`
    font-size: 5.5rem;
    background: linear-gradient(180deg, #e8c25a 0%, #03cffc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 64px;

    margin-left: 710px;
    font-size: 60px;
    line-height: 1.1;
    font-weight: 600;
    
    font-family: 'Oswald', sans-serif;

    @media screen and (max-width: 768px){
        margin-left: 0px;
    }

    @media screen and (max-width: 480px) {
        font-size: 3rem;
    }
`;

export const HWWH2 = styled.div`
    font-size: 1rem;
    margin-bottom: 10px;
    font-weight: bolder;
    font-family: 'Oswald', sans-serif;
`;

export const HWWP = styled.p`
    font-size: 1rem;
    text-align: center;
    font-family: 'Oswald', sans-serif;
`;