import React, { useState, useEffect } from "react";
import "./styles/Login.scss";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const errorParam = params.get("error");
    if (errorParam) setError(decodeURIComponent(errorParam));
  }, []);

  const handleLogin = (provider) => {
    setError(null);
    navigate("/dashboard");
    // window.location.href = `${import.meta.env.VITE_API_URL}/auth/${provider}`;
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <div className="brand-logo">
            <img
              src="https://lairesit.sirv.com/Tortoise/tortoise-logo.png"
              alt="Studio Logo"
              className="brand-img"
            />
          </div>
          <h1>Welcome to Studio</h1>
          <p>Sign-in to start practicing.</p>
        </div>

        <div className={`error-box ${error ? "show" : ""}`}>
          <i className="fa-solid fa-triangle-exclamation"></i>
          <span>{error}</span>
        </div>

        <div className="sso-container">
          {/* <button
            className="sso-btn google"
            onClick={() => handleLogin("google")}
          >
            <i className="fa-brands fa-google"></i>
            <span>Continue with Google</span>
          </button> 
          <button
            className="sso-btn github"
            onClick={() => handleLogin("github")}
          >
            <i className="fa-brands fa-github"></i>
            <span>Continue with GitHub</span>
          </button> */}

          <button
            className="sso-btn discord"
            onClick={() => handleLogin("discord")}
          >
            <i className="fa-brands fa-discord"></i>
            <span>Continue with Discord</span>
          </button>
        </div>

        <div className="login-footer">
          <p>
            By signing in, you agree to our <span>Terms of Service</span>
          </p>
        </div>
      </div>

      <div className="bg-glow"></div>
    </div>
  );
}
