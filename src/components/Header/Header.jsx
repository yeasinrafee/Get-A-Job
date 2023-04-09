import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/">Home</Link>
      <Link to="blog">Blog</Link>
    </div>
  );
};

export default Header;
