import React from "react";
import profilePicture1 from "../../images/profile_pic.jpeg";
import profilePicture2 from "../../images/profile_pic1.jpeg";
import profilePicture3 from "../../images/profile_pic2.jpeg";
import profilePicture4 from "../../images/profile_pic3.jpeg";
import profilePicture5 from "../../images/profile_pic4.jpeg";

function Tweet(props) {
  let data = props.data;
  // TODO: All tweet components should be under react's state control
  console.log(data.profilePicture);
  let profilePic;
  if (data.profilePicture == 1) {
    profilePic = profilePicture1;
  }
  if (data.profilePicture == 2) {
    profilePic = profilePicture2;
  }
  if (data.profilePicture == 3) {
    profilePic = profilePicture3;
  }
  if (data.profilePicture == 4) {
    profilePic = profilePicture4;
  }
  if (data.profilePicture == 5) {
    profilePic = profilePicture5;
  }

  return (
    <article className="Tweet">
      <img src={profilePic} className="profile-img Tweet__profile-img" />

      <div className="Tweet__container">
        {/* Header */}
        <header className="Tweet__header">
          <h3 className="Tweet__header__name">{data.name}</h3>
          <h4 className="Tweet__header__username">{data.username}</h4>
          <h4 className="Tweet__header__dot"> • </h4>
          <h4 className="Tweet__header__date">{data.date}</h4>
          <h4 className="Tweet__header__dots">•••</h4>
        </header>
        {/* Tweet content */}
        <p className="Tweet__content">{data.content}</p>
        {/* Footer */}
        <div className="Tweet__footer">
          <div className="flex-row flex-gap--1 Tweet__footer__container--comment">
            <i class="fa-regular fa-comment Tweet__footer__icon"></i>
            <div className="Tweet__footer__counter">{data.commentCounter}</div>
          </div>
          <div className="flex-row flex-gap--1 Tweet__footer__container--retweet">
            <i class="fa-solid fa-retweet Tweet__footer__icon"></i>
            <div className="Tweet__footer__counter">{data.retweetCounter}</div>
          </div>
          <div className="flex-row flex-gap--1 Tweet__footer__container--like">
            <i class="fa-regular fa-heart Tweet__footer__icon"></i>
            <div className="Tweet__footer__counter">{data.likeCounter}</div>
          </div>
          <div className="Tweet__footer__container--comment">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Tweet;

// 280 character, max-length tweet
// asdfasdl;fkjw;aeiolfjsl;dkcvnmo;waejcl;kasjd;lkjas;dlkfj;alskdjfweflk;asncv,xmncslkjdf;laksdjf;lkasjdf;lkjasd;lkfja;sldkjfl;aksjdf;laskjdf;lkasjdfl;kasjdfl;kajsdl;fkjasd;lfkjas;ldkfj;alskdjfl;aksdjf;lkasjdfl;kjasd;flkjasl;dkfjas;ldkfj;alskdjf;laksdjf;laksjdf;lkasjdfl;kajsdf;lkjas
