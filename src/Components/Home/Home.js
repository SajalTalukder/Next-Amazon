import React, { useContext, useEffect } from "react";
import Product from "../Product/Product";
import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";
import cls from "./home.module.scss";
import DetailsContext from "../../store/AuthContext";
import { auth } from "../../Components/Auth/firebase";

const Home = ({ items }) => {
  const { setUser, user } = useContext(DetailsContext);
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [setUser]);

  return (
    <div className={cls.home}>
      <Nav />
      <Banner />
      <Product items={items} />
      <Footer />
    </div>
  );
};

export default Home;
