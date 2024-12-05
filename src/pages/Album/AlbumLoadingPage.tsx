import React, { FC } from "react";
import s from "./loadingPage.module.scss";

type Props = {
  displayName: string
}

const AlbumLoadingPage: FC<Props> = ({ displayName}) => {

  return (
    <div className={s.wrapper}>
      <div className={s.name}>{displayName}</div>
    </div>
  );
};

export default AlbumLoadingPage;
