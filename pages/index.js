import React from "react";
import Home from "../src/Components/Home/Home";
import { getAllProduct } from "../src/helper/productApi";
import Head from "next/head";

const HomePage = ({ products }) => {
  <Head>
    <title>Next Js Amazon Clone</title>
    <meta name="description" content="You can buy any product with low price" />
  </Head>;
  return <Home items={products} />;
};

export default HomePage;

export async function getStaticProps() {
  const products = await getAllProduct();
  return {
    props: { products },
  };
}
