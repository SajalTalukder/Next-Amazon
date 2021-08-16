import React, { useContext } from "react";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import cls from "./cart.module.scss";
import CartContext from "../../store/Context";
import EmptyCart from "./EmptyCart";

const CartPage = () => {
  const { items } = useContext(CartContext);
  if (items.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className={cls["cart"]}>
      <div className={cls["row-1-2"]}>
        <CartList />
        <CartTotal />
      </div>
    </div>
  );
};

export default CartPage;
