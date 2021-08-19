import Head from "next/head";
import React from "react";
import SignIn from "../../src/Components/Auth/SignIn";

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>Sign-in form</title>
        <meta name="description" content="sign in with your Amazon account" />
      </Head>
      <SignIn />
    </>
  );
};

export default SignInPage;
