import React from "react";
import { Helmet } from "react-helmet";
import Search from "../components/home/Search";
import { motion } from "framer-motion";

const Discover = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className="w-app h-vh"
      style={{ backgroundColor: "rgb(249,248,253)" }}
    >
      <Helmet>
        <title>Discover</title>
      </Helmet>
      <Search />
    </motion.div>
  );
};

export default Discover;
