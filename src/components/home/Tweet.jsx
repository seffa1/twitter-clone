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
          Q: Why did the React class component feel relieved? A: Because it was
          now off the hook.
        </p>
        {/* Footer */}
      </div>
    </article>
  );
}

export default Tweet;

// 280 character, max-length tweet
// asdfasdl;fkjw;aeiolfjsl;dkcvnmo;waejcl;kasjd;lkjas;dlkfj;alskdjfweflk;asncv,xmncslkjdf;laksdjf;lkasjdf;lkjasd;lkfja;sldkjfl;aksjdf;laskjdf;lkasjdfl;kasjdfl;kajsdl;fkjasd;lfkjas;ldkfj;alskdjfl;aksdjf;lkasjdfl;kjasd;flkjasl;dkfjas;ldkfj;alskdjf;laksdjf;laksjdf;lkasjdfl;kajsdf;lkjas
