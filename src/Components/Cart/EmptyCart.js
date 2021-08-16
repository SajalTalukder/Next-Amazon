/* eslint-disable react/no-unescaped-entities */
import React from "react";
import cls from "./cart.module.scss";
import Image from "next/image";
import btnCls from "../../UI/Button.module.scss";
import { useRouter } from "next/dist/client/router";

const EmptyCart = () => {
  const router = useRouter();
  return (
    <div className={cls["empty"]}>
      <div className={cls["empty__image"]}>
        <Image
          src="/images/empty.png"
          alt="Empty Cart"
          width={600}
          height={300}
          objectFit="contain"
        />
      </div>
      <h3>YOUR CART IS EMPTY</h3>
      <button
        onClick={() => {
          router.push("/");
        }}
        className={btnCls["btn"]}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;
