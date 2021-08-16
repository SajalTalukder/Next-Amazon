/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import cls from "./signin.module.scss";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { auth } from "./firebase";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        router.push("/");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className={cls["signin"]}>
      <div
        className={cls["signin__image"]}
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          src="/images/logoblack1.png"
          alt="logo"
          width={160}
          height={100}
          objectFit="contain"
        />
      </div>
      <div className={cls["signin__form-div"]}>
        <form className={cls["signin__form"]}>
          <h1>Sign-In</h1>
          <h5>Email :</h5>
          <input
            type="Email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <h5>Password :</h5>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <div className={cls["signin__button"]}>
            <button type="submit" onClick={signInHandler}>
              Continue
            </button>
          </div>
          <p>
            By continuing, you agree to Amazon's <span>Conditions of Use</span>
            and <span>Privacy Notice</span>.
          </p>
          <h3>Need Help?</h3>
        </form>
      </div>
      <div className={cls["new"]}>
        <h3></h3>
        <div>New To Amazon</div>
        <h2></h2>
      </div>
      <button
        onClick={() => {
          router.push("/auth/create-account");
        }}
        className={cls["createBtn"]}
      >
        Create Your New Amazon Account
      </button>
    </div>
  );
};

export default SignIn;
