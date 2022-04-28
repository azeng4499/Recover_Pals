import React, { useState } from "react";
import Header from "../SharedComponents/Header";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../Firebase";
import styled from "styled-components";
import {
  Input,
  SmallContainer3,
  Button,
  ButtonText,
  ErrorContainer,
  ButtonContainer,
  ErrorP1,
} from "../SharedComponents/BodyComponents";

const SignInContainer = styled.div`
  height: 60vh;
`;

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  const navigate = useNavigate();

  const { email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email || !password) {
      setData({ ...data, error: "Invalid Email or Password" });
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      try{
        await updateDoc(doc(db, "recoveree", result.user.uid), {
          isOnline: true,
        });
      } catch {
        await updateDoc(doc(db, "mentor", result.user.uid), {
          isOnline: true,
        });
      }
      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });

      const docSnapRec = await getDoc(
        doc(db, "recoveree", auth.currentUser.uid)
      );

      if (docSnapRec.exists()) {
          navigate("/dashboard");
      } else {
        navigate("/mentor-portal");
      }
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };

  return (
    <>
      <Header message="Welcome Back!" />
      <SignInContainer>
        <ButtonContainer>
          <Button>
            <FcGoogle size="1.5em" />
            <ButtonText space="true">Log In With Google</ButtonText>
          </Button>
        </ButtonContainer>
        <ErrorContainer>
          <ButtonText>- OR -</ButtonText>
        </ErrorContainer>
        <SmallContainer3>
          <Input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
        </SmallContainer3>
        <SmallContainer3>
          <Input
            type="text"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </SmallContainer3>
        <ErrorContainer>
          <ErrorP1>{error ? <p>{error}</p> : null}</ErrorP1>
        </ErrorContainer>
        <ButtonContainer>
          <Button largePadding="true" onClick={handleSubmit} disable={loading}>
            <ButtonText>
              <BsFillArrowRightCircleFill />
            </ButtonText>
          </Button>
        </ButtonContainer>
      </SignInContainer>
      {/* <Spacer></Spacer> */}
    </>
  );
};

export default SignIn;
