import React, { useContext } from "react";
import Image from "next/image";
import cls from "./cart.module.scss";
import { StarIcon } from "@heroicons/react/solid";
import btnCls from "../../UI/Button.module.scss";
import CartContext from "../../store/Context";

const CartItem = ({
  image,
  title,
  category,
  price,
  amount,
  description,
  id,
}) => {
  const totalPrice = (+price * +amount).toFixed(2);
  const cartCtx = useContext(CartContext);
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
  const removeItemHandler = () => {
    cartCtx.removeItem(id);
  };
  return (
    <div className={cls["cart-item"]}>
      <div className={cls["cart-item__image"]}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          objectFit="contain"
        />
      </div>
      <div className={cls["cart-item__content"]}>
        <h1>{title}</h1>

        <h3>Category : {category}</h3>
        <div className={cls["cart-item__icon"]}>
          {Array(5)
            .fill()
            .map((_, i) => {
              return <StarIcon className={cls["cart-item__star"]} key={i} />;
            })}
        </div>
        <h2>${totalPrice}</h2>
        <h4> Quantity : {amount}</h4>
        <div className={cls["cart-item__buttons"]}>
          <button onClick={addItemHandler} className={btnCls.btn}>
            Add More
          </button>
          <button onClick={removeItemHandler} className={btnCls.btn}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
