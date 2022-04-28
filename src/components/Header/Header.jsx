import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="Header-container">
      <Link className="link-logo" to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/481px-Pokebola-pokeball-png-0.png"
          alt=""
        />
      </Link>
      <div className="Header-nav">
        <div className="icon-container" onClick={() => handleOpen()}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <nav className={`OptionsDefault ${open && "Options"}`}>
          <Link className="a" to="/">
            Home
          </Link>
          <Link className="a" to="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
