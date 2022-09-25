import React from "react";
import profilePic from "../../images/profile_pic.jpeg";

function Tweet(props) {
  return (
    <article className="Tweet">
      <img src={profilePic} className="profile-img Tweet__profile-img" />
      <div className="Tweet__container">
        {/* Header */}
        <header className="Tweet__header">
          <h3 className="Tweet__header__name">SamEffa</h3>
          <h4 className="Tweet__header__username">@samueleffa</h4>
          <h4 className="Tweet__header__dot"> • </h4>
          <h4 className="Tweet__header__date">Aug 26</h4>
          <h4 className="Tweet__header__dots">•••</h4>
        </header>
        {/* Tweet content */}
        <p className="Tweet__content">
          q. Why was the JavaScript developer sad? a. Because they didn't Node
          how to Express himself
        </p>
        {/* Footer */}
        <div className="Tweet__footer">
          <div className="flex-row flex-gap--1">
            <i class="fa-regular fa-comment Tweet__footer__icon"></i>
            <div className="Tweet__footer__counter">5</div>
          </div>
          <div className="flex-row flex-gap--1">
            <i class="fa-solid fa-retweet Tweet__footer__icon"></i>
            <div className="Tweet__footer__counter">14</div>
          </div>
          <div className="flex-row flex-gap--1">
            <i class="fa-regular fa-heart Tweet__footer__icon"></i>
            <div className="Tweet__footer__counter">45</div>
          </div>
          <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </div>
      </div>
    </article>
  );
}

export default Tweet;

// 280 character, max-length tweet
// asdfasdl;fkjw;aeiolfjsl;dkcvnmo;waejcl;kasjd;lkjas;dlkfj;alskdjfweflk;asncv,xmncslkjdf;laksdjf;lkasjdf;lkjasd;lkfja;sldkjfl;aksjdf;laskjdf;lkasjdfl;kasjdfl;kajsdl;fkjasd;lfkjas;ldkfj;alskdjfl;aksdjf;lkasjdfl;kjasd;flkjasl;dkfjas;ldkfj;alskdjf;laksdjf;laksjdf;lkasjdfl;kajsdf;lkjas
