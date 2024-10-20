import { Routes, Route } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SigninForm";
import Home from "./_root/pages/Home";
import Profile from "./_root/pages/Profile";
import Settings from "./_root/pages/Settings";
import SignUpForm from "./_auth/forms/SignupForm";
import "./globals.css";
import AuthProvider from "react-auth-kit";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import createStore from "react-auth-kit/createStore";

const App = () => {
  const store = createStore({
    authName: "_auth",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "http:",
  });
  return (
    <main className="flex h-screen">
      <AuthProvider store={store}>
        <Routes>
          {/*Public Routes*/}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>

          {/*Private Routes*/}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route
              path={"/MyProfile"}
              element={
                <RequireAuth fallbackPath={"/sign-in"}>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path={"/settings"}
              element={
                <RequireAuth fallbackPath={"/sign-in"}>
                  <Settings />
                </RequireAuth>
              }
            />
          </Route>

          <Route path="/*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </main>
  );
};

export default App;
