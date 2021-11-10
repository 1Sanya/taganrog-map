import React from "react";
import { CgClose } from "react-icons/all";
import s from "./Nav.module.scss";
import { Link } from "react-router-dom";

const SearchNav = () => {
  return (
    <div className={s.wrapper}>
      <Link className={s.linkToSearch} to="/">
        <CgClose className={s.closeIcon} />
      </Link>
    </div>
  );
};

export default SearchNav;
