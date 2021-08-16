import React, { useContext } from "react";
import CartContext from "../../store/Context";
import cls from "./cart.module.scss";

const CartTotal = () => {
  let { totalAmount: subtotal } = useContext(CartContext);
  subtotal = +subtotal.toFixed(2);
  const vat = (0.15 * +subtotal).toFixed(2);
  const total = (+vat + +subtotal).toFixed(2);
  return (
    <div className={cls["total"]}>
      <div className={cls["total__heading"]}>Summary</div>
      <div className={cls["total__subtotal"]}>
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <div className={cls["total__subtotal"]}>
        <span>Vat</span>
        <span>${vat}</span>
      </div>
      <div className={cls["total__subtotal-last"]}>
        <span>shipping</span>
        <span>Free</span>
      </div>
      <div className={cls["total__total"]}>
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
      <button className={cls["total__button"]}>Checkout</button>
    </div>
  );
};

export default CartTotal;
