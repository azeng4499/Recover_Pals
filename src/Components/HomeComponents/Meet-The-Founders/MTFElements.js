import styled from 'styled-components'

export const MTFContainer = styled.div`
    height: 550px;
    margin-bottom: 50x;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 750px;
    }
`;

export const MTFWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 12px;
    padding: 0 50px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr 1 fr;
        padding: 0 20px;
    }

`;

export const MTFCard = styled.div`
    border-style: solid;
    // background: linear-gradient(white, white) padding-box, 
    // linear-gradient(180deg, #e8cf8b, #03cffc) border-box;
    border-width: 2px;
    //border-color: transparent;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 250px;
    padding 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;


    @media screen and (max-width: 480px) {
        padding: 5px;
        width: 150px;
    }
`;

export const MTFIcon = styled.img`
    border-radius: 10px;
    height: 130px;
    width: 130px;
    margin-bottom: 10px;

    @media screen and (max-width: 480px){
        height: 80px;
        width: 80px;
    }
`;

export const MTFH1 = styled.div`
    background: linear-gradient(180deg, #e8c25a 0%, #03cffc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;


    margin-bottom: 64px;
    margin-bottom: 64px;
    font-family: 'Oswald', sans-serif;

    margin-right: 680px;
    font-size: 60px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        margin-right: 0px;
    }

    @media screen and (max-width: 480px) {
        font-size: 3rem;
    }
`;

export const MTFH2 = styled.div`
    font-size: 1.5rem;
    font-weight: bolder;
    color: #000;
    font-family: 'Oswald', sans-serif;
`;

export const MTFP = styled.p`
    margin-top: 8px;
    font-size: 0.85rem;
    text-align: center;
    color: #000;
    font-family: 'Oswald', sans-serif;
`;