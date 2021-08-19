import React from "react";
import Nav from "../src/Components/Home/Nav";
import Footer from "../src/Components/Home/Footer";
import CartPage from "../src/Components/Cart/CartPage";
import Head from "next/head";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Your Cart Item</title>
        <meta name="description" content="Your Cart Item " />
      </Head>
      <Nav />
      <CartPage />
      <Footer />
    </>
  );
};

export default Cart;
