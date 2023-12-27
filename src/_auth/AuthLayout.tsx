import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return <>
    {isAuthenticated ? (
      <Navigate to="./" />
    ): (
      <>
        <section>
          <Outlet />
        </section>
        <img src="AuthLayout_Pic.png" className="hidden xl:block h-screen w-1/2"/>
      </>
    )}
  </>;
};

export default AuthLayout;
