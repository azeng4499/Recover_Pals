import styled from "styled-components";

export const MessageContainer = styled.div`
  margin-top: 5px;
  height: fit-content;
  display: flex;
  justify-content: ${({ from }) => (from ? "end" : "start")};
`;

export const MessageWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border-radius: 10px;
  background: ${({ from }) => (from ? "#6ef2ff" : "black")};
  color: ${({ from }) => (from ? "#000" : "white")};
`;


export const MessageText = styled.div`
    font-size: 20px;    
`;
