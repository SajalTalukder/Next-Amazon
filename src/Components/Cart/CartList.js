import React, { useContext } from "react";
import CartContext from "../../store/Context";
import CartItem from "./CartItem";
import cls from "./cart.module.scss";
import DetailsContext from "../../store/AuthContext";

const CartList = () => {
  const { items } = useContext(CartContext);
  const { user } = useContext(DetailsContext);

  const amount = items.reduce((prev, next) => {
    return (prev += next.amount);
  }, 0);

  const cartText = user
    ? `${user.email.split("@")[0].toUpperCase()} your Cart (${amount} Items)`
    : `Your Cart (${amount} Items)`;

  return (
    <div className={cls["cart__list"]}>
      <h2 className={cls["cart__heading"]}>{cartText}</h2>
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            image={item.image}
            category={item.category}
            price={item.price}
            description={item.description}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default CartList;
