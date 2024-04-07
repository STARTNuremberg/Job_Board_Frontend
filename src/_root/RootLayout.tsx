import React from "react";
import { Link } from "react-router-dom";

const RootLayout = () => {
  return <div>
    <Link
      to="/sign-in"
      className="text-primary-500 text-small-semibold ml-1">
      Login In
    </Link>

    <Link
      to="/sign-up"
      className="text-primary-500 text-small-semibold ml-1">
      Sign Up
    </Link>



  </div>;
};

export default RootLayout;
