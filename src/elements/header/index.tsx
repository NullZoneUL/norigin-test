import React from "react";
import { Link } from "react-router-dom";
import ExtendedImage from "../image";
import { logoImage } from "@assets/images/logo/index";
import { searchImage } from "@assets/images/search";
import { loginImage } from "@assets/images/login";
import { Routes } from "src/routes/routes";
import "./_style.scss";

const HeaderBar = () => {
  return (
    <header className="header-bar">
      <ExtendedImage image={loginImage} preload className="header-login-icon" />
      <Link to={`/${Routes.index}`}>
        <ExtendedImage image={logoImage} preload className="header-bar-logo" />
      </Link>
      <ExtendedImage
        image={searchImage}
        preload
        className="header-search-icon"
      />
    </header>
  );
};

export default HeaderBar;
