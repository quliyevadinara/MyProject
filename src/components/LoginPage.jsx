import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { supabase } from "../supabase/client";
import { Link, useNavigate } from "react-router-dom";
import { AccountDataContext, UserContext } from "../App";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [type, setType] = useState("password");
  const [emptyInputError, setEmptyInputError] = useState(
    "empty-input-error-hidden"
  );
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useContext(UserContext);
  const [accountData, setAccountData] = useContext(AccountDataContext);

  const handleChandePasswordToggle = (e) => {
    e.preventDefault();
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const navigate = useNavigate();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      setAccountData(data);
      localStorage.setItem("account", JSON.stringify(data));
      if (user.email == email && user.password == password) {
        navigate("/");
      } else {
        setEmptyInputError("empty-input-error");
      }
      console.log(accountData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="login-register-page">
        <Form>
          <h1>Login</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={handleChangeEmail}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={type}
              onChange={handleChangePassword}
              value={password}
            />
          </Form.Group>
          <div className="show-password">
            <span onClick={handleChandePasswordToggle}>
              {type == "password" ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            Show password
          </div>
          <Button
            className="login-btn"
            onClick={handleSubmitLogin}
            variant="primary"
            type="submit"
          >
            Login
          </Button>{" "}
          <br />
          <Link className="create-account-link" to="/register">
            Don't have an account? Create an account
          </Link>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
