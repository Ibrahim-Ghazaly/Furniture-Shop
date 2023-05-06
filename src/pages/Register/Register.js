import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../../redux/slices/user-slice";
import TopImage from "../../components/TopImage/TopImage";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (user.token && user.isUser) {
      setEmail("");
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
      userAuth({
        username: `${userName}`,
        email: `${email}`,
        password: `${password}`,
      })
    );
  };

  return (
    <>
      <TopImage name={"Register"} />
      <div className="container">
        {user.isUser && (
          <div className="alert alert-success" role="alert">
            You create your account successfully
          </div>
        )}

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {/* {isLoading && <div className="loader"></div>} */}

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
            {/* <div id="userName" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3 form-label-input">
            <label htmlFor="email" className="form-label">
              Email{" "}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Email"
            />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
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
              "Register"
            )}
          </button>

          <Link to="/login" className=" mt-5 btn text-center d-block ">
            Or Login
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register;
