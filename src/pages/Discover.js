import React from "react";
import { Helmet } from "react-helmet";
import Search from "../components/home/Search";

const Discover = () => {
  return (
    <div className="w-app h-vh" style={{ backgroundColor: "rgb(249,248,253)" }}>
      <Helmet>
        <title>Discover</title>
      </Helmet>
      <Search />
    </div>
  );
};

export default Discover;
