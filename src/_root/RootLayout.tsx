import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"

const RootLayout = () => {

  return <div>
    
    <Outlet />
    <Toaster />


  </div>;
};

export default RootLayout;
