import { Routes, Route } from "react-router-dom";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}></Route>
      </Routes>
    </main>
  );
};

export default App;
