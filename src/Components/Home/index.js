import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/index";

const Home = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      // Redirect to the login page if no user is logged in
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    // Render nothing while redirecting
    return null;
  }

  return (
    <>
      <p>Welcome, {currentUser.email}!</p>
      <button onClick={signOut}>Sign out</button>
    </>
  );
};

export default Home;
