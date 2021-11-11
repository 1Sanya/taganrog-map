import React from "react";
import s from "./HomeNav.module.scss";
import { AiOutlineSearch } from "react-icons/all";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className={s.wrapper}>
      <Link to="/search" className={s.linkTSearch}>
        <AiOutlineSearch className={s.searchIcon} />
      </Link>
    </div>
  );
};

export default HomeNav;
