import React, { useState } from "react";
import { login } from "../../httpRequests";

function SignIn(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault(); // prevents page reloading
    let data = { email: email, password: password };
    // TODO: Move this fetch to a separate file
    fetch("http://localhost:4001/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        window.alert(data.message);
        if (data.refreshToken) props.closeModal();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="SignIn input__form">
      <div className="SignIn__header">
        <button
          className="SignIn__header__x input__x"
          onClick={props.closeModal}
        >
          <i class="fa-solid fa-x"></i>
        </button>
        <i class="fa-brands fa-twitter SignIn__header__icon"></i>
      </div>
      <div className="SignIn__container input__container">
        <h2 className="input__heading">Enter your password</h2>
        <input
          className="SignIn__email input__box"
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="SignIn__password input__box"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {/* TODO: Forgot your password reset */}
        <button type="submit" className="SignIn__submit input__submit">
          Log In
        </button>

        <div className="input__footer">
          <span className="input__footer__p">Don't have an account?</span>
          <button onClick={props.closeModal} className="link link--blue">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
