import React from "react";
import Nav from "../../src/Components/Home/Nav";
import Footer from "/src/Components/Home/Footer";
import {
  getProductById,
  getAllProduct,
  getProductByCategory,
} from "../../src/helper/productApi";
import ProductDetails from "../../src/Components/Product/ProductDetails";
import Head from "next/head";

const ProductDetailsPage = ({ product, products }) => {
  const relatedItem = products.slice(0, 4);
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.descripption} />
      </Head>
      <Nav />
      <ProductDetails item={product} relatedItems={relatedItem} />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;

export async function getStaticProps(context) {
  const id = context.params.productId;
  const product = await getProductById(id);
  const category = product.category;
  const products = await getProductByCategory(category);

  return {
    props: {
      product,
      products,
    },
  };
}

export async function getStaticPaths() {
  const products = await getAllProduct();

  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
