import React from "react";
import profilePic from "../../images/profile_pic.jpeg";
import SignOut from "./SignOut";
import Modal from "react-modal";

function Navbar() {
  // Sign Out Modal
  const [signOutModalIsOpen, setSignOutModalIsOpen] = React.useState(false);

  // Profile position

  const [profilePosition, setProfilePosition] = React.useState(0);

  function getPosition() {
    let rect = document.getElementById("profile");
    if (rect) setProfilePosition(rect.x);
    return 0;
  }

  // getPosition();

  return (
    <>
      {/* Sign Out Modals */}
      <Modal
        disablePortal
        className="Modal"
        isOpen={signOutModalIsOpen}
        contentLabel="SignOut Modal"
        onRequestClose={() => setSignOutModalIsOpen(false)}
        style={{
          overlay: { background: "none" },
          content: {
            position: "absolute",
            // bottom: "100px",
            right: `0px`,
            width: "300px",
            height: "200px",
            background: "black",
            borderRadius: "20px",
            boxShadow: "1px 0px 6px 2px rgba(255, 255, 255, 0.3)",
          },
        }}
        parentSelector={() => document.getElementById("navbar")}
      >
        <SignOut />
      </Modal>

      <nav className="Navbar" id="navbar">
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
          id="profile"
        >
          <img src={profilePic} className="profile-img--small"></img>
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
