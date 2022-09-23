import React from "react";
import profilePic from "../../images/profile_pic.jpeg";
import Tweet from "./Tweet";

function Feed() {
  return (
    <section className="Feed">
      {/* Tweet composition section */}
      <section className="Feed__compose">
        <h1 className="Feed__compose__header">Home</h1>
        <div className="Feed__compose__container">
          <img src={profilePic} className="profile-img"></img>
          <div className="Feed__compose__container--inner">
            <textarea
              placeholder="What's happening?"
              className="Feed__compose__input"
              rows="5"
              maxLength="280"
            ></textarea>
            <ul className="Feed__compose__attachments">
              <li>
                <i class="fa-regular fa-image"></i>
              </li>
              <li>
                <i class="fa-solid fa-gift"></i>
              </li>
              <li>
                <i class="fa-solid fa-square-poll-horizontal"></i>
              </li>
              <li>
                <i class="fa-regular fa-face-smile"></i>
              </li>
              <li>
                <i class="fa-regular fa-calendar"></i>
              </li>
              <li>
                <i class="fa-solid fa-location-dot"></i>
              </li>
              <button className="Feed__compose__tweet">Tweet</button>
            </ul>
          </div>
        </div>
      </section>

      {/* Tweet container section */}
      <div className="Feed__tweet-container">
        <Tweet />
      </div>
    </section>
  );
}

export default Feed;

/*
Heres 280 characters
asdfasdl;fkjw;aeiolfjsl;dkcvnmo;waejcl;kasjd;lkjas;dlkfj;alskdjfweflk;asncv,xmncslkjdf;laksdjf;lkasjdf;lkjasd;lkfja;sldkjfl;aksjdf;laskjdf;lkasjdfl;kasjdfl;kajsdl;fkjasd;lfkjas;ldkfj;alskdjfl;aksdjf;lkasjdfl;kjasd;flkjasl;dkfjas;ldkfj;alskdjf;laksdjf;laksjdf;lkasjdfl;kajsdf;lkjas
*/
