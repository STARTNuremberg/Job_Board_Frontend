import React, { useState } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import axios from "axios";

const Profile = () => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const [user, setUser] = useState({ username: "", email: "", avatar: "" });

  axios
    .get(`http://localhost:8000/users/user/`, {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${auth.token}`,
      },
    })
    .then((res) => {
      setUser({
        username: res.data.username,
        email: res.data.email,
        avatar: res.data.avatar,
      });
    });
  return (
    <>
      {isAuthenticated && (
        <div className="h-screen w-screen">
          <h1>Hello {user.username}</h1>
          <h2>Your Email: {user.email}</h2>
        </div>
      )}
    </>
  );
};

export default Profile;
