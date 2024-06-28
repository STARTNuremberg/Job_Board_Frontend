import React from "react";
import { Link } from "react-router-dom";
import useSignOut from 'react-auth-kit/hooks/useSignOut';

const RootLayout = () => {
  const signOut = useSignOut()
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

    <button onClick={() => signOut()}>Sign Out!</button>


  </div>;
};

export default RootLayout;
