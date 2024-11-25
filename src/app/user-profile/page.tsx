"use client";

import React from "react";
import UserProfileComponent from "@/components/UserProfileComponent";

const UserProfilePage = () => {
  const [token, setToken] = React.useState<string | null>(null);
  const [userData, setUserData] = React.useState<any>(null);

  const handleQueryUserData = async () => {
    if (!token) return;
    try {
      const response = await fetch(
        "http://192.168.100.4:4000/api/v1/users/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (data) {
        setUserData(data);
      }
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  React.useEffect(() => {
    if (token) {
      handleQueryUserData(); // Call only after the token is set
    }
  }, [token]); // Run when token changes

  return (
    <div>
      <UserProfileComponent user={userData} />
    </div>
  );
};

export default UserProfilePage;
