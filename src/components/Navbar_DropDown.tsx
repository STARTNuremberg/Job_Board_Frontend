import React, { useState } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { Link } from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useToast } from "@/components/ui/use-toast";

const Navbar_DropDown = () => {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const { toast } = useToast();
  return (
    <div className="w-52 text-lg absolute right-10 border-2 border-navy-blue mt-px rounded shadow-xl bg-white z-10">
      {isAuthenticated ? (
        <div>
          <Link className="block w-full p-2 hover:bg-slate-200" to="/MyProfile">
            My Profile
          </Link>
          <Link className="block w-full p-2 hover:bg-slate-200" to="/settings">
            Settings
          </Link>
          <div
            className="block w-full p-2 hover:bg-slate-200 cursor-pointer"
            onClick={() => {
              toast({
                title: "Signed Out!",
                description: "You have been successfully signed out.",
              });
              signOut();
            }}
          >
            Logout
          </div>
        </div>
      ) : (
        <div>
          <Link className="block w-full p-2 hover:bg-slate-200" to="/sign-in">
            Sign In
          </Link>
          <Link className="block w-full p-2 hover:bg-slate-200" to="/sign-up">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar_DropDown;
