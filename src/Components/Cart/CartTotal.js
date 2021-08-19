import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useContext } from "react";
import DetailsContext from "../../store/AuthContext";
import CartContext from "../../store/Context";
import cls from "./cart.module.scss";

const stripePromise = loadStripe(process.env.stripe_public_key);

const CartTotal = () => {
  let { totalAmount: subtotal, items } = useContext(CartContext);
  const router = useRouter();
  const { user } = useContext(DetailsContext);
  subtotal = +subtotal.toFixed(2);
  const vat = (0.15 * +subtotal).toFixed(2);
  const total = (+vat + +subtotal).toFixed(2);

  const createCheckoutSession = async () => {
    const strip = await stripePromise;
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
    });
    const resut = await strip.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (resut.error) {
      alert(resut.error.message);
    }
  };

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
      {!user && (
        <button
          className={cls["total__button"]}
          onClick={() => {
            router.push("/auth/signin");
          }}
        >
          Sign In to Checkout
        </button>
      )}
      {user && (
        <button
          role="link"
          onClick={createCheckoutSession}
          className={cls["total__button"]}
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default CartTotal;
