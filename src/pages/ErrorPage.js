import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const ErrorContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
`;


const ErrorPage = () => {
  const navigate = useNavigate();

  function handleWindowSizeChange() {
    if (window.innerWidth >= 1280) {
      navigate("/");
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <ErrorContainer>
      <h1>Opps! The window you are using is too small</h1>
    </ErrorContainer>
  );
};

export default ErrorPage;
