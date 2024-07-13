import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import Sidebar from "@/components/Sidebar";

const RootLayout = () => {

  return <div className="w-screen h-screen">
    
    <section className="h-screen w-1/4 border-4">
    <Sidebar />
    </section>

    <section className="h-screen flex flex-1 justify-center items-center flex-col
        py-10">

    <Outlet />

    </section>
  
    
    <Toaster />
  </div>;
};

export default RootLayout;
