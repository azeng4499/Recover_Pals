import styled from "styled-components";

export const CRContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
  height: calc(100vh);
  width: 100vw;
  background: #bdf9ff;
`;

export const CRUsersContainer = styled.div`
  margin-top: 70px;
  border-right: 3px solid;
  overflow-y: auto;
  background: #bdf9ff;
`;

export const CRMessages = styled.div`
  margin-top: 70px;
`;

export const MessagesContainer = styled.div`
  height: calc(100vh - 220px);
  overflow-y: auto;
  padding: 10px;
`;

export const MessagesContainer2 = styled.div`
  height: calc(100vh - 220px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
`;

export const BigText = styled.div`
  font-size: 30px;
`;

export const TypeBar = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid;
  border-width: 2px;
`;

export const InputBox = styled.input`
  height: 40px;
  width: 900px;
  border: solid;
  border-radius: 30px;
  border-width: 3px;
  margin: 0 20px;
  font-size: 20px;
  padding: 0 20px;
  font-family: "Oswald", sans-serif;

  &:focus {
    outline: none;
  }
`;

export const ChatLabel = styled.div`
  margin-top: 10px;
  height: 40px;
  border-top: solid;
  border-top-width: 3px;
  display: flex;
  align-items: center;
  background: black;
  color: white;
  justify-content: center;
`;

export const LabelText = styled.div`
  font-size: 20px;
  font-family: "Oswald", sans-serif;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
