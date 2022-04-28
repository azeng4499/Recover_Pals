import styled from "styled-components";

export const SubtitleContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0 230px;
  height: 80px;
  position: relative;
  z-index: 1;
`;

export const SubtitleP1 = styled.div`
  font-size: 30px;
  font-family: "Oswald", sans-serif;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  margin: 20px;
  //background: papayawhip;
  width: 300px;
  border: solid;
  border-width: 2.5px;
  border-radius: 3px;

  font-family: "Oswald", sans-serif;

  &:focus {
    outline: none;
  }

  name: name;

  //placeholder-size: 20px;
`;

export const LongAnswerInput = styled.textarea`
  font-size: 20px;
  padding: 10px;
  margin: 20px;

  width: 670px;
  border: solid;
  border-width: 2.5px;
  border-radius: 3px;
  resize: none;

  height: 100px;

  font-family: "Oswald", sans-serif;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    height: 150px;
  }
`;

export const BigContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0 70px;
  height: 150px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 480px) {
    height: 200px;
  }
`;

export const SmallContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0 230px;
  //80
  height: 80px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 480px) {
    display: grid;
    height: 200px;
  }
`;

export const SmallContainer3 = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0 230px;
  //80
  height: 80px;
  position: relative;
  z-index: 1;
`;

export const PictureContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0 230px;
  //80
  height: 130px;
  position: relative;
  z-index: 1;
`;

export const SmallContainer2 = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  //padding: 0 230px;
  //80
  height: 150px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 480px) {
    display: grid;
    height: 200px;
    margin-bottom: 40px;
  }
`;

export const ButtonContainer = styled.div`
  //background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0 230px;
  height: 80px;
  position: relative;
  z-index: 1;
`;

export const Button = styled.div`
  border-style: solid;
  border-width: 2px;
  border-radius: 50px;

  background: ${({ clicked }) => (clicked ? "#000" : "#fff")};
  color: ${({ clicked }) => (clicked ? "#fff" : "#000")};

  //white-space: nowrap;
  padding: ${({ largePadding }) => (largePadding ? "10px 100px" : "10px 30px")};
  font-size: 20px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  font-family: "Oswald", sans-serif;
  //width: 300px;
  margin: 0 30px;

  align-items: center;
  justify-content: center;
  display: flex;
  grid-template-columns: 1fr 1fr;
`;

export const ButtonText = styled.div`
  font-size: 20px;
  //background: red;
  margin-left: ${({ space }) => (space ? "20px" : "0px")};
  font-family: "Oswald", sans-serif;
`;

export const ErrorContainer = styled.div`
  height: 30px;
  //background: blue;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`;

export const ErrorP1 = styled.div`
  font-size: 20px;
  color: red;
  font-family: "Oswald", sans-serif;
`;

export const Spacer = styled.div`
  height: 45px;
`;
