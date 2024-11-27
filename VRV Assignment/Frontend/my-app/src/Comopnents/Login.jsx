import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  
    login(email, password)
      .then((user) => {
        if (user && email === "admin@gmail.com") {
          navigate("/admin/dashboard", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        console.log("Login error:", error.message);
      });
  };
  

  return (
    <>
  

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1a1a1a",
        }}
      >
        <div
          style={{
            backgroundColor: "#333",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <h1
            style={{
              color: "#fff",
              textAlign: "center",
              marginBottom: "24px",
              fontSize: "28px",
            }}
          >
            User Login
          </h1>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "16px" }}>
              <label
                htmlFor="email"
                style={{ color: "#fff", fontSize: "16px", marginBottom: "8px", display: "block" }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                style={{
                  backgroundColor: "#444",
                  color: "#fff",
                  border: "none",
                  padding: "10px",
                  borderRadius: "4px",
                  width: "100%",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label
                htmlFor="password"
                style={{ color: "#fff", fontSize: "16px", marginBottom: "8px", display: "block" }}
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                style={{
                  backgroundColor: "#444",
                  color: "#fff",
                  border: "none",
                  padding: "10px",
                  borderRadius: "4px",
                  width: "100%",
                }}
                required
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#ff6347",
                  border: "none",
                  fontSize: "16px",
                  color: "#fff",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Login
              </button>
              <span style={{ color: "#fff", fontSize: "14px" }}>
                New User? <Link to="/register" style={{ color: "#ff6347" }}>Register</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
