import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return <>
    {isAuthenticated ? (
      <Navigate to="./" />
    ): (
      <>
        <section className="xl:block h-screen w-1/2">
          <Outlet />
        </section>
        <img src="assets/images/PLACEHOLDER_Auth.jpg" className="hidden xl:block h-screen w-1/2 right-0 rounded-sm"/>
      </>
    )}
  </>;
};

export default AuthLayout;
