import React, { useEffect, useState } from "react";
import CartContext from "./Context";
import { useContext } from "react";
 import Users from "./loginUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {  loggedin, setLoggedin, setUserName } =
    useContext(CartContext);

  const userArr = Users["user"];

  const login = () => {
    let count = 0;
    if (email == "" || password == "") {
      setError("All are required fields!");
    } else {
      userArr.filter((item) => {
        if (email === item.email && password === item.password) {
          setUserName(item.username);
          setLoggedin(true);
          count = count + 1;
        }
      });
      if (count == 0) {
        setError("userName does not exists!!");
        setEmail("");
        setPassword("");
      }
    }
  };
  useEffect(() => {
    if (loggedin) {
      navigate("/");
    }
  }, [loggedin]);

  return (
    <>
      <div className="logoLogin">
        <img src="download.png" alt="" />
      </div>

      <div className="loginForm">
        <p id="error">{error}</p>
        <h1>LogIn</h1>
        <div className="entry">
          <p>Enter Your Email</p>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="user2@gmail.com"
          />
        </div>
        <div className="entry">
          <p>Enter Your Password</p>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            placeholder="user2"
          />
        </div>
        <button onClick={login}>Login</button>
        <p>
          By Continuing, you agree to Amazon's&nbsp;
          <a href="/" className="blue">
            Conditions of Use
          </a>
          &nbsp;and&nbsp;
          <a href="/" className="blue">
            Privacy Notice
          </a>
        </p>
      </div>
    </>
  );
};

export default Login;
