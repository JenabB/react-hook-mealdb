import React from "react";
import Search from "../components/home/Search";
import Recommended from "../components/home/Recommended";
import Category from "../components/home/Category";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div
      className="lg:w-app w-full bg-white mx-auto pb-14"
      style={{ backgroundColor: "rgb(249,248,253)" }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Recommended />
      <Category />
      <Search />
      <Footer />
    </div>
  );
};

export default Home;
