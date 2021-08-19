import Head from "next/head";
import React from "react";
import Success from "../src/Components/Success/Success";

const paymentSuccess = () => {
  <Head>
    <title>Payment Successful</title>
    <meta name="description" content="Your Payment was successful" />
  </Head>;
  return <Success />;
};

export default paymentSuccess;
