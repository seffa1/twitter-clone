import React from "react";
import Trending from "./Trending";

function Recommended() {
  return (
    <section className="Recommended">
      {/* Search bar */}
      <div className="Recommended__search-container">
        <i class="fa-solid fa-magnifying-glass Recommended__search-icon"></i>
        <input
          type="text"
          placeholder="Search Twitter"
          className="Recommended__search-input"
        ></input>
      </div>

      {/* What's happening */}
      <section className="Recommended__whatsHappening">
        <h1 className="Recommended__whatsHappening__title">What's happening</h1>
        <Trending />
        <Trending />
        <Trending />
      </section>
    </section>
  );
}

export default Recommended;
