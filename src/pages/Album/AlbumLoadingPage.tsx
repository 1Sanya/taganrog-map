import React, { FC } from "react";
import s from "./loadingPage.module.scss";
import { loadingPageT } from "../../Types/albumsPageT";

const AlbumLoadingPage: FC<loadingPageT> = (props) => {
  const { displayName } = props;
  return (
    <div className={s.wrapper}>
      <div className={s.name}>{displayName}</div>
    </div>
  );
};

export default AlbumLoadingPage;
