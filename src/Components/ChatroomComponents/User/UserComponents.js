import styled from 'styled-components'

export const UserWrapper = styled.div`
  height: 120px;
  padding: 10px;
  border-bottom: solid;
  border-bottom-width: 2px;
  border-left: solid;
  cursor: pointer;
  display: flex;
  background: #6ef2ff;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 200px;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
`;

export const UserProfilePic = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: solid;
  border-width: 2px;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    height: 50px;
    width: 50px;
  }
`;

export const UserText = styled.div`
  width: 200px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-family: "Oswald", sans-serif;
  display: grid;

  @media screen and (max-width: 480px) {
    width: 80px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`;

export const UserTextP1 = styled.div`
  width: 200px;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-family: "Oswald", sans-serif;
  display: flex;

  @media screen and (max-width: 480px) {
    width: 80px;
    font-size: 15px;
  }
`;

export const UserTextP2 = styled.div`
  width: 200px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-family: "Oswald", sans-serif;
  display: flex;
  color: #737b87;

  @media screen and (max-width: 480px) {
    width: 80px;
    font-size: 15px;
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;
