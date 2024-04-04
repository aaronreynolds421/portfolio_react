import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./Header.css";
export default function Header() {
  const logo = require("../../assets/BaR_logo.png");
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="desktop-nav-bar">
      <img className="logo" src={logo} alt="profile_logo" />
      <div className="desktop-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="ham__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#black"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuLine
            color="#black"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="Ham-menu_container scale-up-center">
            <div className="Ham-menu_container-links">
              <div className="Ham-menu_container-links-sign"></div>
              <p>
                <a href="/">home</a>
              </p>
              <p>
                <a href="/projects">Projects</a>
              </p>
              <p>
                <a href="/contact">Contact</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
