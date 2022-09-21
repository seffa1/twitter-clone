import React from "react";

function NavbarMobile() {
  return (
    <nav className="NavbarMobile">
      <ul className="NavbarMobile__ul">
        <li>
          <i class="fa-solid fa-house"></i>
        </li>
        <li>
          <i class="fa-solid fa-house"></i>
        </li>
        <li>
          <i class="fa-solid fa-bell"></i>
        </li>
        <li>
          <i class="fa-solid fa-envelope"></i>
        </li>
      </ul>
      <button className="button-tweet mobile-tweet"></button>
    </nav>
  );
}

export default NavbarMobile;
