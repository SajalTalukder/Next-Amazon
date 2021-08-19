import Head from "next/head";
import React from "react";
import CreateAccount from "../../src/Components/Auth/CreateAccount";

const CreateAccountPage = () => {
  return (
    <div>
      <Head>
        <title>Create Your Amazon account</title>
        <meta name="description" content="Create Your Amazon account" />
      </Head>

      <h1>
        <CreateAccount />
      </h1>
    </div>
  );
};

export default CreateAccountPage;
