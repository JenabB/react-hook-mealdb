import React from "react";

const Footer = () => {
  return (
    <div class="grid grid-cols-1 px-2 py-5 lg:grid-cols-2 bg-yellow-400">
      <div className="m-2">
        <h1 className="font-bold">About</h1>
        <p>
          Web App using React Hooks and TheMealDB open API, localStorage as
          storage for favourite meal
        </p>
      </div>

      <div className="m-2">
        <h1 className="font-bold">Contact</h1>
        <h2>WA : +6281274627547</h2>
        <h2>FB : Yogi Surya Pranata</h2>
        <h2>IG : @yogii.js</h2>
      </div>
    </div>
  );
};

export default Footer;
