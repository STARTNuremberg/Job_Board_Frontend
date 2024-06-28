import { Outlet, Navigate } from "react-router-dom";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'


const AuthLayout = () => {
  const isAuthenticated = useIsAuthenticated()

  return <>
    {isAuthenticated ? (
      <Navigate to="./" />
    ): (
      <>
        <section className="flex flex-1 justify-center items-center flex-col
        py-10">
          <Outlet />
        </section>

        <img 
        src="/assets/images/PLACEHOLDER_Auth.jpg"
        
        className="hidden xl:block h-screen w-1/2  object-cover bg-no-repeat"/>
      </>
    )}
  </>;
};

export default AuthLayout;