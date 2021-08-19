import React from "react";
import cls from "./success.module.scss";
import Image from "next/image";
import btnCls from "../../UI/Button.module.scss";
import { useRouter } from "next/dist/client/router";

const Success = () => {
  const router = useRouter();
  return (
    <div className={cls["success"]}>
      <div className={cls["success__image"]}>
        <Image
          src="/images/payment.jpg"
          alt="payment"
          height={300}
          width={700}
          objectFit="contain"
        />
      </div>
      <div className={cls["success__content"]}>
        <h2>Your payment is successful</h2>
        <p>
          Thank you so much for visiting our store and buy some product we will
          deliver your product as soon as possible
        </p>
        <button
          onClick={() => {
            router.push("/");
          }}
          className={btnCls.btn}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default Success;
