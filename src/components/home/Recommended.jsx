import React from "react";

function Recommended() {
  return (
    <section className="Recommended">
      <div className="Recommended__search-container">
        <i class="fa-solid fa-magnifying-glass Recommended__search-icon"></i>
        <input
          type="text"
          placeholder="Search Twitter"
          className="Recommended__search-input"
        ></input>
      </div>
    </section>
  );
}

export default Recommended;
