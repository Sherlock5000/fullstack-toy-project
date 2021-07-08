import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import "./login.css";

const Login = ({ setUser }) => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user1" && password === "special_password_1") {
      let path = `/dashboard`;
      history.push(path);
    }
    setUser(username);
  };

  return (
    <>
      <div className="container h-100" />
      <div className="d-flex justify-content-center h-100" />
      <div className="user_card">
        <div className="d-flex justify-content-center">
          <h3 id="form-title">LOGIN</h3>
        </div>
        <div className="d-flex justify-content-center form_container">
          <form method="POST" action="">
            <div className="input-group mb-3">
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>

              <input
                type="text"
                name="username"
                placeholder="Username..."
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group mb-2">
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>

              <input
                type="password"
                name="password"
                placeholder="Password..."
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-center mt-3 login_container">
              <input
                className="btn login_btn"
                type="submit"
                value="Login"
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>

        <div className="mt-4">
          <div className="d-flex justify-content-center links">
            Don't have an account?{" "}
            <Link to="/register" className="ml-2">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div />
      <div />
    </>
  );
};

export default Login;
