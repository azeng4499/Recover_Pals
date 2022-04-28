import React from 'react'
import Footer from "../Components/HomeComponents/Footer";
import Navbar from "../Components/SharedComponents/Navbar";
import SignUp from '../Components/SignUpComponents/SignUp';

const SignUpPage = () => {
  return (
    <>
      <Navbar isSignIn={false} />
      <SignUp />
      <Footer />
    </>
  );
}

export default SignUpPage