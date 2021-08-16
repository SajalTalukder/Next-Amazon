import React, { useContext } from "react";
import Image from "next/image";
import cls from "./Nav.module.scss";
import {
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import CartContext from "../../store/Context";
import { useRouter } from "next/dist/client/router";
import { auth } from "../Auth/firebase";
import DetailsContext from "../../store/AuthContext";

const Nav = () => {
  const { items } = useContext(CartContext);
  const { user } = useContext(DetailsContext);
  const router = useRouter();
  const amount = items.reduce((prev, next) => {
    return (prev += next.amount);
  }, 0);

  const signOutHandler = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <nav className={cls.nav}>
        <div className={cls["nav__logo"]}>
          <Image
            onClick={() => {
              router.push("/");
            }}
            src="/images/logo2.png"
            alt="logo"
            width={110}
            height={64}
            objectFit="contain"
          />
        </div>
        <div className={cls["nav__item"]}>
          <div className={cls["nav__icon-location"]}>
            <LocationMarkerIcon />
          </div>
          <div className={(cls["nav__option"], cls["nav__option-hide"])}>
            <p className={cls["nav__option-1"]}>Deliver</p>
            <p className={cls["nav__option-2"]}>Bangladesh</p>
          </div>
        </div>
        <div className={cls["nav__input-group"]}>
          <input type="text" className={cls["nav__input"]} />
          <button className={cls["nav__input-group-icon"]}>
            <SearchIcon className={cls["nav__icon"]} />
          </button>
        </div>
        <div
          onClick={() => {
            if (!user) {
              router.push("/auth/signin");
            }
          }}
          className={cls["nav__option"]}
        >
          <p className={cls["nav__option-1"]}>
            {user ? `Hello ${user.email.split("@")[0]}` : "Hello Guest"}
          </p>
          <p onClick={signOutHandler} className={cls["nav__option-2"]}>
            {user ? "Sign Out" : "Sign In"}
          </p>
        </div>
        <div className={cls["nav__option"]}>
          <p className={cls["nav__option-1"]}>Returns</p>
          <p className={cls["nav__option-2"]}>& orders</p>
        </div>
        <div
          className={cls["nav__option-flex"]}
          onClick={() => {
            router.push("/cart");
          }}
        >
          <ShoppingCartIcon className={cls["nav__cart"]} />
          <span className={cls["nav__amount"]}>{amount}</span>
          <p className={cls["nav__option-2"]}>Cart</p>
        </div>
      </nav>
      <nav className={cls["nav-2"]}>
        <div className={cls["nav-2__item"]}>
          <div className={cls["nav-2__icon"]}>
            <MenuIcon />
          </div>
        </div>
        <div className={cls["nav-2__item"]}>All</div>
        <div className={(cls["nav-2__item"], cls["nav-2__item-hide"])}>
          Todays Deals
        </div>
        <div className={(cls["nav-2__item"], cls["nav-2__item-hide"])}>
          Customer Service
        </div>
        <div className={cls["nav-2__item"]}>Gift Card</div>
        <div className={cls["nav-2__item"]}>Registry</div>
        <div className={cls["nav-2__item"]}>sell</div>
      </nav>
    </>
  );
};

export default Nav;
