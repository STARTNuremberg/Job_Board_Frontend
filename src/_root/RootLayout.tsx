import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar.tsx";

const RootLayout = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default RootLayout;
