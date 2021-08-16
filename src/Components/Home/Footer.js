import React from "react";
import cls from "./Footer.module.scss";
import Image from "next/image";

import { PhoneIcon, InboxIcon } from "@heroicons/react/outline";

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls["footer__logo"]}>
        <Image
          src="/images/logo2.png"
          height={90}
          width={120}
          alt="logo"
          objectFit="contain"
        />
      </div>
      <div className={cls["row-4"]}>
        <div className={cls["col-md-4"]}>
          <div className={cls["footer__one"]}>
            <div className={cls["footer__about"]}>
              <div className={cls["footer__title"]}>About Us</div>
              <p className={cls["footer__para"]}>
                Here You will find the best quality product.You can order
                product Remove Product.You can see the details about the product
              </p>
            </div>
            <div className={cls["footer__contact"]}>
              <div className={cls["footer__title"]}> Contact Us</div>
              <p className={cls["footer__phone"]}>
                <span className={cls["footer__icon"]}>
                  <PhoneIcon />
                </span>
                +04858392
              </p>
              <p className={cls["footer__email"]}>
                <span className={cls["footer__icon"]}>
                  <InboxIcon />
                </span>
                sajal@gamil.com
              </p>
            </div>
          </div>
        </div>
        <div className={cls["col-md-4"]}>
          <div className={cls["footer__two"]}>
            <div className={cls["footer__title"]}>Information</div>
            <ul className={cls["footer__ul"]}>
              <li className={cls["footer__item"]}>
                <p className={cls["footer__link"]}>About Us</p>
              </li>
              <li className={cls["footer__item"]}>
                <p className={cls["footer__link"]}>More Search</p>
              </li>
              <li className={cls["footer__item"]}>
                <p className={cls["footer__link"]}>Products</p>
              </li>
              <li className={cls["footer__item"]}>
                <p className={cls["footer__link"]}>Offer</p>
              </li>
              <li className={cls["footer__item"]}>
                <p className={cls["footer__link"]}>Events</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={cls["col-md-4"]}>
          <div className={cls["footer__three"]}>
            <div className={cls["footer__title"]}>Helpful Link</div>
            <ul className={cls["footer__ul"]}>
              <li className={cls["footer__item"]}>
                <p className={cls["footer__link"]}>Services</p>
              </li>
              <li className={cls["footer__item"]}>
                <p className={cls["footer__link"]}>Supports</p>
              </li>
              <li className={cls["footer__item"]}>
                <p className={cls["footer__link"]}>Terms and Condition</p>
              </li>
              <li className={cls["footer__item"]}>
                <p className={cls["footer__link"]}>Privacy Police</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={cls["col-md-4"]}>
          <div className={cls["footer__four"]}>
            <p className={cls["footer__sub"]}>Subscribe For More Info</p>
            <div className={cls["footer__input-div"]}>
              <input
                type="email"
                className={cls["footer__input"]}
                placeholder="Enter Your Email"
              />
            </div>
            <button className={cls["footer__button"]}>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
