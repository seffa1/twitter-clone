import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../../httpRequests";

function SignUp(props) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Send submit to the server, server checks if its valid

    createAccount({
      username: name,
      password: password,
      email: email,
    }).then((res) => {
      console.log(res);
      if (res.status === 201) {
        window.alert(res.data);
        props.closeModal();
      } else if (res.status === 400) {
        window.alert(res.data);
      } else {
        window.alert("Something went wrong");
      }
    });

    // TODO: If its invalid, give user an error message (ie. email already exists)
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="SignUp input__form">
      <div className="SignUp__header">
        <button
          className="SignUp__header__x input__x"
          onClick={props.closeModal}
        >
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
      <div className="SignUp__container input__container">
        <h2 className="input__heading">Create your account</h2>
        <div className="input__box-name__container">
          <p className="input__box-name__counter">{name.length}/50</p>
          <input
            required
            className="SignUp__name input__box input__box-name"
            placeholder="name"
            type="text"
            maxLength={50}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <input
          required
          className="SignUp__email input__box input__box-name"
          placeholder="email"
          type="email"
          // TODO: Make this regex production worthy
          pattern="[a-zA-Z0-9._+-]+@[a-zA-Z0-9 -]+\.[a-zA-Z]{2,}"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          className="SignUp__password input__box input__box-name"
          placeholder="password"
          type="password"
          pattern="[a-zA-Z0-9]{8,}"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          required
          className="SignUp__password-confirm input__box input__box-name"
          placeholder="password confirm"
          type="password"
          pattern="[a-zA-Z0-9]{8,}"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        
        <button type="submit" className="SignUp__submit input__submit ">
          Create account
        </button>
        <div className="input__footer">
          <span className="input__footer__p">Already have an account?</span>
          <button onClick={props.closeModal} className="link link--blue">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
