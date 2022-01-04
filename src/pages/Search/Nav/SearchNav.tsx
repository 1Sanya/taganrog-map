import React, { memo } from "react";
import s from "./Nav.module.scss";
import { Link } from "react-router-dom";
import CloseIcon from "../../../Components/svgComponents/CloseIcon";

const SearchNav = memo(() => {
  return (
    <div className={s.wrapper}>
      <Link className={s.linkToSearch} to="/">
        <CloseIcon />
      </Link>
    </div>
  );
});

SearchNav.displayName = "SearchNav";

export default SearchNav;
