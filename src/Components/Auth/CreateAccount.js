/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import cls from "./signin.module.scss";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { auth } from "./firebase";

const CreateAccount = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const CreateAccountHandler = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        router.replace("/");
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
          <h1>Create New Account</h1>
          <h5>Name :</h5>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <h5>Email :</h5>
          <input
            type="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Password :</h5>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className={cls["signin__button"]}>
            <button type="submit" onClick={CreateAccountHandler}>
              Create Your Amazon Account
            </button>
          </div>
          <p>
            By continuing, you agree to Amazon's <span>Conditions of Use</span>
            and <span>Privacy Notice</span>.
          </p>
          <h4>
            Already Have An Account ?{" "}
            <span
              onClick={() => {
                router.push("/auth/signin");
              }}
            >
              Sign In
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
