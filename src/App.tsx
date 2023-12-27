import { Routes, Route } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SigninForm";
import Home from "./_root/pages/Home";
import SignUpForm from "./_auth/forms/SignupForm";
import './globals.css'

const App = () => {
  return (
    <main className="flex h-screen">
       <Routes>

        {/*Public Routes*/}
        <Route element={<AuthLayout/>}>
          <Route path="/Sign-in" element={<SignInForm />}/>
          <Route path="/Sign-up" element={<SignUpForm />}/>
        </Route>

        {/*Private Routes*/}
        <Route element={<RootLayout/>}>
          <Route index element={<Home />}/>
        </Route>

       </Routes>
    </main>
  );
};

export default App;
