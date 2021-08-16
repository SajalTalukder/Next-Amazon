import React, { useContext } from "react";
import cls3 from "../../UI/Button.module.scss";
import Image from "next/image";
import cls from "./product-detail.module.scss";
import { StarIcon } from "@heroicons/react/solid";
import ProductItem from "./ProductItem";
import cls2 from "./productList.module.scss";
import { useRouter } from "next/dist/client/router";
import UserComment from "../UserComments/UserComment";
import CartContext from "../../store/Context";

const ProductDetails = ({ item, relatedItems }) => {
  const router = useRouter();

  const cartCtx = useContext(CartContext);

  const { id, title, image, description, category, price } = item;

  const addItemHandler = () => {
    cartCtx.addItem({
      id,
      title,
      image,
      description,
      category,
      price,
      amount: 1,
    });
  };

  return (
    <>
      <div className={cls["pDetails"]}>
        <div className={cls["pDetails__div"]}>
          <div className={cls["pDetails__image"]}>
            <Image
              src={image}
              alt={title}
              width={600}
              height={350}
              objectFit="contain"
            />
          </div>
          <div className={cls["pDetails__content"]}>
            <h2 className={cls["pDetails__title"]}>{title}</h2>
            <h2 className={cls["pDetails__price"]}>${price}</h2>
            <div className={cls["pDetails__icon"]}>
              {Array(5)
                .fill()
                .map((_, i) => {
                  return <StarIcon className={cls["pDetails__star"]} key={i} />;
                })}
              ({Math.floor(Math.random() * 200 + 300)})review
            </div>
            <p className={cls["pDetails__category"]}>Category : {category}</p>
            <p className={cls["pDetails__des"]}>{description}</p>
            <div className={cls["pDetails__buttons"]}>
              <button className={cls3.btn} onClick={addItemHandler}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className={cls["user-comment"]}>
          <h1>User Review</h1>
          <UserComment
            name="Sajal"
            rating="5"
            date="3 Days Ago"
            comment="Best Product. The quality of the product is so good."
          />
          <UserComment
            name="Talukder"
            rating="4"
            date="7 Days Ago"
            comment="The product quality is quite good . i am fully satisfied. i will order more product from this website"
          />
          <UserComment
            name="Sajal Talukder"
            rating="4"
            date="10 May 2021"
            comment="The Product is great.i also like the website its easy to use and so reactive"
          />
        </div>
      </div>

      <div className={cls["recomend"]}>
        <h1 className={cls["heading"]}>Our Other Product You May Like</h1>
        <div className={cls2["row-1-4"]}>
          {relatedItems.map((item) => {
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
        <div className="center">
          <button
            className={cls3.btn}
            onClick={() => {
              router.push("/");
            }}
          >
            Go Back To Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
