import React from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import Recommended from "./Recommended";
import NavbarMobile from "./NavbarMobile";

function Home() {
  return (
    <section className="Home">
      <Navbar />
      <Feed />
      <Recommended />
      <NavbarMobile />
    </section>
  );
}

export default Home;
