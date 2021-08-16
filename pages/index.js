import React from "react";
import Home from "../src/Components/Home/Home";
import { getAllProduct } from "../src/helper/productApi";

const HomePage = ({ products }) => {
  return <Home items={products} />;
};

export default HomePage;

export async function getStaticProps() {
  const products = await getAllProduct();
  return {
    props: { products },
  };
}
