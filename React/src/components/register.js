import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <h3 id="form-title">REGISTER ACCOUNT</h3>
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
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-envelope-square"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email..."
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="password1"
                    placeholder="Enter password..."
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="password2"
                    placeholder="Re-enter password..."
                    className="form-control"
                  />
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <input
                    className="btn login_btn"
                    type="submit"
                    value="Register Account"
                  />
                </div>
              </form>
            </div>

            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Already have an account?{" "}
                <Link to="/login" className="ml-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
