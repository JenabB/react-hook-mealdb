import React from "react";
import Search from "../components/home/Search";
import Recommended from "../components/home/Recommended";
import Category from "../components/home/Category";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      className="w-app bg-white mx-auto pb-14"
      style={{ backgroundColor: "rgb(249,248,253)" }}
    >
      <Recommended />
      <Category />
      <Search />
      <Footer />
    </div>
  );
};

export default Home;
