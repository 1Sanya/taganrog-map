import React from "react";
import s from "./Search.module.scss";
import SearchNav from "./Nav/SearchNav";

const Search = () => {
  return (
    <div className={s.wrapper}>
      <SearchNav />
      <input className={s.input} spellCheck={false} autoFocus placeholder="Поиск по сайту" />
    </div>
  );
};

export default Search;
