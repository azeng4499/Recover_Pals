import React from 'react'
import Footer from '../Components/HomeComponents/Footer';
import Navbar from '../Components/SharedComponents/Navbar';
import SignIn from '../Components/SignInComponents/SignIn'

const SignInPage = () => {
  return (
    <>
      <Navbar isSignIn={true} />
      <SignIn />
      <Footer />
    </>
  );
};

export default SignInPage;