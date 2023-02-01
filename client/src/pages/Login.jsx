import React, { useContext } from "react";
import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../Context/UserContext"
import Cookies from 'js-cookie'

function Login() {
  const userDetails = useContext(UserContext)
  const naigate = useNavigate();
  const [error, setError] = useState("");
  const [loginUser, setLoginUser] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(true);
  const signInPage = () => {
    setLogin(false);
  };

  const loginPage = () => {
    setLogin(true);
  };

  const sigin = async () => {
    const user = {
      email: email,
      password: password,
    };
    console.log(user, "user");
    try {
      const { data } = await axios.post("http://localhost:8000/signin", {
        email,
        password,
      });

      console.log(data, "data");
      if (data.success) {
        Cookies.set("user", JSON.stringify(data))
        naigate("/");
      } else {
        setError(data.message);
      }
    } catch (error) {}
  };

  const loginto = async () => {
    const user = {
      email: email,
      password: password,
    };
    console.log(user, "user");
    try {
      const { data } = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      console.log(data,"data");

      userDetails.fun(data.email)
      

      if (data.success) {
        Cookies.set("user", JSON.stringify(data))
        naigate("/");

      } else {
        setError(data.message);
      }
    } catch (error) {}
  };
  return (
    <div className="Login">
      {login ? (
        <div className="login_container">
          <div className="login_box">
            <span>Login</span>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={loginto}>Login</button>
            <div onClick={signInPage} className="signin">
              Signin
            </div>
          </div>
          <div className="signin error">{error}</div>
        </div>
      ) : (
        <div className="login_container">
          <div className="login_box">
            <span>Sigin</span>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={sigin}>Signin</button>
            <div onClick={loginPage} className="signin">
              Login
            </div>
          </div>
          <div className="signin error">{error}</div>
        </div>
      )}
    </div>
  );
}

export default Login;
