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
            {/* Text area */}
            <textarea
              placeholder="What's happening?"
              className="Feed__compose__input"
              rows="5"
              maxLength="280"
            ></textarea>

            {/* Attachments */}
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

              {/* Tweet button */}
              <button className="Feed__compose__tweet">Tweet</button>
            </ul>
          </div>
        </div>
      </section>

      {/* Tweet container section */}
      <div className="Feed__tweet-container">
        <Tweet
          data={{
            name: "SamEffa",
            username: "@samueleffa",
            profilePicture: "1",
            date: "Aug 26",
            content:
              "q. Why was the JavaScript developer sad? a. Because they didn't Node how to Express himself",
            commentCounter: "5",
            retweetCounter: "14",
            likeCounter: "45",
          }}
        />
        <Tweet
          data={{
            name: "JohnSmith",
            username: "@smith007",
            profilePicture: "2",
            date: "Aug 27",
            content:
              "Why did the developer stay home from work? She had a code!",
            commentCounter: "15",
            retweetCounter: "24",
            likeCounter: "99",
          }}
        />
        <Tweet
          data={{
            name: "Jessica Blue",
            username: "@bluescluesJJ",
            profilePicture: "3",
            date: "Aug 27",
            content:
              "Why was the JavaScript reality show cancelled after only one episode? People thought it seemed scripted.",
            commentCounter: "2",
            retweetCounter: "3",
            likeCounter: "9",
          }}
        />
        <Tweet
          data={{
            name: "Carry Overwood",
            username: "@yesThatsMyName",
            profilePicture: "4",
            date: "Aug 28",
            content:
              "Why was the class upset that its parent died? Because it wouldn’t be getting the inheritance!",
            commentCounter: "229",
            retweetCounter: "1809",
            likeCounter: "458",
          }}
        />
        <Tweet
          data={{
            name: "Jake Dawg",
            username: "@jakedawgy",
            profilePicture: "5",
            date: "Aug 26",
            content:
              "q. Why was the JavaScript developer sad? a. Because they didn't Node how to Express himself",
            commentCounter: "5",
            retweetCounter: "14",
            likeCounter: "45",
          }}
        />
      </div>
    </section>
  );
}

export default Feed;

/*
Heres 280 characters
asdfasdl;fkjw;aeiolfjsl;dkcvnmo;waejcl;kasjd;lkjas;dlkfj;alskdjfweflk;asncv,xmncslkjdf;laksdjf;lkasjdf;lkjasd;lkfja;sldkjfl;aksjdf;laskjdf;lkasjdfl;kasjdfl;kajsdl;fkjasd;lfkjas;ldkfj;alskdjfl;aksdjf;lkasjdfl;kjasd;flkjasl;dkfjas;ldkfj;alskdjf;laksdjf;laksjdf;lkasjdfl;kajsdf;lkjas
*/
