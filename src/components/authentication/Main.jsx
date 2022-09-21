import React from "react";
import logoWhite from "../../images/logoWhite.png";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Main(props) {
  // Sign Up Modal
  const [signUpModalIsOpen, setSignUpModalIsOpen] = React.useState(false);

  // Sign In Modal
  const [signInModalIsOpen, setSignInModalIsOpen] = React.useState(false);

  return (
    <>
      {/* Modals */}
      <Modal
        className="Modal"
        isOpen={signUpModalIsOpen}
        contentLabel="SignUp Modal"
      >
        <SignUp closeModal={() => setSignUpModalIsOpen(false)} />
      </Modal>

      <Modal
        className="Modal"
        isOpen={signInModalIsOpen}
        contentLabel="SignIn Modal"
      >
        <SignIn closeModal={() => setSignInModalIsOpen(false)} />
      </Modal>

      {/* Main page */}
      <div className="Main">
        <div className="Main__container">
          <div className="Main__container__img-div">
            <img src={logoWhite} className="Main__container__logo" />
          </div>
          <section className="Main__container__info">
            <i class="fa-brands fa-twitter Main__container__info__icon"></i>
            <h1 className="Main__container__info__h1">Happening now</h1>
            <h2 className="Main__container__info__h2">Join Twitter today.</h2>
            <div className="Main__container__info__links">
              <button
                onClick={() => setSignUpModalIsOpen(true)}
                className="link--white link "
              >
                <div className="link__button link__button--blue">
                  Sign up with email
                </div>
              </button>

              <h3 className="Main__container__info__h3">
                Already have an account?
              </h3>

              <button
                className="link--white link--wide"
                onClick={() => setSignInModalIsOpen(true)}
              >
                <div className="link__button link__button--black ">Sign in</div>
              </button>
            </div>
          </section>
        </div>
        <footer className="Main__footer">
          <Link to="/" className="link--grey">
            About
          </Link>
          <Link to="/" className="link--grey">
            Help Center
          </Link>
          <Link to="/" className="link--grey">
            Terms of Service
          </Link>
          <Link to="/" className="link--grey">
            Privacy Policy
          </Link>
          <Link to="/" className="link--grey">
            Cookie Policy
          </Link>
          <Link to="/" className="link--grey">
            Accessibility
          </Link>
          <Link to="/" className="link--grey">
            Ads info
          </Link>
          <Link to="/" className="link--grey">
            Blog
          </Link>
          <Link to="/" className="link--grey">
            Careers
          </Link>
          <Link to="/" className="link--grey">
            Brand Resources
          </Link>
          <Link to="/" className="link--grey">
            Advertising
          </Link>
          <Link to="/" className="link--grey">
            Marketing
          </Link>
          <Link to="/" className="link--grey">
            Twitter for Business
          </Link>
          <Link to="/" className="link--grey">
            Developers
          </Link>
          <Link to="/" className="link--grey">
            Directory
          </Link>
          <Link to="/" className="link--grey">
            Settings
          </Link>
          <Link to="/" className="link--grey">
            @ 2022 Twitter, Inc.
          </Link>
        </footer>
      </div>
    </>
  );
}

export default Main;
