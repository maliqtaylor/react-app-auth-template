// SignIn.js
import React, { useState } from "react";
import { useAuth } from "../../../contexts/authContext/index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      return navigate("/");
    } catch (error) {
      console.error("Error signing in with email and password", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      return navigate("/");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div>
      <h2>Log-In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </form>
    </div>
  );
};

export default Login;
