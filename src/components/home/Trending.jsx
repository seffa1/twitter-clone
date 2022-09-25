import React from "react";
import trendingPic from "../../images/trending_pic.jpeg";

function Trending() {
  return (
    <article className="Trending  flex-row flex-spaced">
      <div className="Trending__container">
        <h4>Trending</h4>
        <h3>Knife Part</h3>
        <h4>Trending with Oregon</h4>
      </div>
      <img src={trendingPic} className="Trending__pic"></img>
    </article>
  );
}

export default Trending;
