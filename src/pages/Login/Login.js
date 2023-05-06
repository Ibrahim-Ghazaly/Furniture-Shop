import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/slices/user-slice";
import TopImage from "../../components/TopImage/TopImage";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (user.token && user.isUser) {
      setUserName("");
      setPassword("");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [navigate, user, isLoading, error]);

  const handleAuth = (e) => {
    e.preventDefault();
    dispatch(
      userLogin({
        identifier: `${userName}`,
        password: `${password}`,
      })
    );
  };

  return (
    <>
      <TopImage name={"Login"} />
      <div className="container">
        {user.isUser && (
          <div className="alert alert-success" role="alert">
            You have been logged in successfully
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleAuth} className=" auth-form">
          <div class="mb-3 form-label-input">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
              placeholder="User Name"
            />
          </div>

          <div className="mb-3 form-label-input">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </button>

          <Link to="/register" className=" mt-5 btn text-center d-block ">
            Or Create An Account
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
