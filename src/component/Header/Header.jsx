import React, { useState } from "react";
import Head from "./Head";
import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/culture">Culture</NavLink>
              </li>
              <li>
                <NavLink to="/politics">Politics</NavLink>
              </li>
              <li>
                <NavLink to="/memes">memes</NavLink>
              </li>
              <li>
                <NavLink to="/sports">Sports</NavLink>
              </li>
              <li>
                <NavLink to="/boxed">Boxed</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">Reviews</NavLink>
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
