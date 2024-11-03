import { useEffect, useState } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import axios from "axios";

interface AuthUser {
  token: string;
}

const Profile = () => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser<AuthUser>();
  const [user, setUser] = useState({ username: "", email: "", avatar: "" });

  useEffect(() => {
    if (isAuthenticated && auth) {
      axios
        .get(
          `https://jobboard-backend-bjggc0fmcghuetea.westeurope-01.azurewebsites.net/users/user/`,
          {
            headers: {
              accept: "*/*",
              Authorization: `Bearer ${auth.token}`, // Use optional chaining to avoid accessing null
            },
          }
        )
        .then((res) => {
          setUser({
            username: res.data.username,
            email: res.data.email,
            avatar: res.data.avatar,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isAuthenticated, auth]);

  return (
    <div className="h-screen w-screen">
      <div className="border-solid border-gray-500 border-2 bg-gray-300 w-1/2 m-auto h-96 mt-6 flex flex-col justify-start items-center">
        {user.avatar == null ? (
          <img
            className="border-solid border-black border-2 rounded-full p-1 m-2 w-20"
            src=".\assets\icons\PLACEHOLDER_Profile.png"
            alt="PLACEHOLDER_Profile_Picture"
          />
        ) : (
          <img
            className="border-solid border-black border-2 rounded-full p-1 m-2 w-20"
            src={user.avatar}
            alt="Avatar"
          />
        )}
        <h1>Hello {user.username}!</h1>
        <h2>Email: {user.email}</h2>
        <h2>Change your password?</h2>
      </div>
    </div>
  );
};

export default Profile;
