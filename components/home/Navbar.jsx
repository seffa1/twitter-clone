import React from "react";
import profilePic from "../../images/profile_pic.jpeg";
import SignOut from "./SignOut";
import Modal from "react-modal";

function Navbar() {
  // Sign Out Modal
  const [signOutModalIsOpen, setSignOutModalIsOpen] = React.useState(false);

  return (
    <>
      {/* Modals */}

      <Modal
        className="Modal"
        isOpen={signOutModalIsOpen}
        contentLabel="SignOut Modal"
        onRequestClose={() => setSignOutModalIsOpen(false)}
        style={{ overlay: { background: "none" } }}
      >
        <SignOut />
      </Modal>

      <nav className="Navbar">
        <ul className="Navbar__ul">
          <li className="Navbar__ul__li">
            <i class="fa-brands fa-twitter"></i>
          </li>
          <li className="Navbar__ul__li">
            <i class="fa-solid fa-house"></i>
            <span className="Navbar__ul__li__label">Home</span>
          </li>
          <li className="Navbar__ul__li">
            <i class="fa-solid fa-hashtag"></i>
            <span className="Navbar__ul__li__label">Explore</span>
          </li>
          <li className="Navbar__ul__li">
            <i class="fa-solid fa-bell"></i>
            <span className="Navbar__ul__li__label">Notifications</span>
          </li>
          <li className="Navbar__ul__li">
            <i class="fa-solid fa-envelope"></i>
            <span className="Navbar__ul__li__label">Messages</span>
          </li>
          <li className="Navbar__ul__li Navbar__ul__li--toggle">
            <i class="fa-regular fa-bookmark"></i>
            <span className="Navbar__ul__li__label">Bookmarks</span>
          </li>
          <li className="Navbar__ul__li Navbar__ul__li--toggle">
            <i class="fa-regular fa-user"></i>
            <span className="Navbar__ul__li__label">Lists</span>
          </li>
          <li className="Navbar__ul__li">
            <i class="fa-regular fa-user"></i>
            <span className="Navbar__ul__li__label">Profile</span>
          </li>
          <li className="Navbar__ul__li">
            <i class="fa-regular fa-user"></i>
            <span className="Navbar__ul__li__label">More</span>
          </li>
        </ul>
        <button className="link__button link__button--blue button-tweet">
          Tweet
        </button>
        <article
          className="Navbar__profile"
          onClick={() => setSignOutModalIsOpen(true)}
        >
          <img src={profilePic} className="Navbar__profile__pic"></img>
          <div className="Navbar__profile__name-container">
            <h3>Effa</h3>
            <h4>@effamusic</h4>
          </div>
          <h3 className="Navbar__profile__dots">...</h3>
        </article>
      </nav>
    </>
  );
}

export default Navbar;
