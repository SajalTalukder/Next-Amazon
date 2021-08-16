import React from "react";
import ProductItem from "./ProductItem";
import Image from "next/image";
import cls from "./productList.module.scss";

const ProductList = ({ items }) => {
  const firstFoutItems = items.slice(0, 4);
  const lastThreeItems = items.slice(4, 7);
  const twoItems = items.slice(7, 9);
  const remainsItems = items.slice(9, items.length);
  return (
    <>
      <div className={cls["productList--1"]}>
        <h1 className={cls["productList__heading-top"]}>Latest Product</h1>
        <div className={cls["row-1-4"]}>
          {firstFoutItems.map((item) => {
            return (
              <ProductItem
                key={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                id={item.id}
                category={item.category}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Image
          src="/images/hero4.jpg"
          alt="hero"
          width={1400}
          height={500}
          objectFit="contain"
        />
      </div>
      <div>
        <h1 className={cls["productList__heading"]}>Tranding Product</h1>
        <div className={cls["row-1-3"]}>
          {lastThreeItems.map((item) => {
            return (
              <ProductItem
                key={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                id={item.id}
                category={item.category}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1 className={cls["productList__heading"]}>Top Product</h1>
        <div className={cls["row-1-2"]}>
          {twoItems.map((item) => {
            return (
              <ProductItem
                key={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                id={item.id}
                category={item.category}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Image
          src="/images/hero8.jpg"
          alt="hero"
          width={1400}
          height={500}
          objectFit="contain"
        />
      </div>
      <div>
        <h1 className={cls["productList__heading"]}>
          Our Best Selling Product
        </h1>
        <div className={cls["row-1-3"]}>
          {remainsItems.map((item) => {
            return (
              <ProductItem
                key={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                id={item.id}
                category={item.category}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
