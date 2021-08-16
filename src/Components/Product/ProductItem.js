import React, { useContext } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import cls from "./productItem.module.scss";
import btnCls from "../../UI/Button.module.scss";

import Link from "next/link";
import CartContext from "../../store/Context";

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

const ProductItem = ({ id, title, image, description, category, price }) => {
  const cartCtx = useContext(CartContext);

  const path = `/product-details/${id}`;

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

  const shortDescription = truncate(description, 100);
  return (
    <div className={cls["product-item"]}>
      <div className={cls["product-item__image"]}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          objectFit="contain"
        />
      </div>
      <div className={cls["product-item__content"]}>
        <h2 className={cls["product-item__title"]}>{title}</h2>
        <h2 className={cls["product-item__price"]}>${price}</h2>
        <div className={cls["product-item__icon"]}>
          {Array(5)
            .fill()
            .map((_, i) => {
              return <StarIcon className={cls["product-item__star"]} key={i} />;
            })}
        </div>
        <p className={cls["product-item__des"]}>{shortDescription}</p>
        <div className={cls["product-item__buttons"]}>
          <button className={btnCls.btn} onClick={addItemHandler}>
            Add To Cart
          </button>

          <Link href={path} passHref>
            <button className={btnCls.btn}>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
