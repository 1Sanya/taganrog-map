import React from "react";
import s from "./loaderPage.module.scss";

const LoaderPage = () => {
  return (
    <div className={s.wrapper}>
      <br />
      <div className={s.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoaderPage;
