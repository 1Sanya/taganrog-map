import React, { Suspense } from "react";
import s from "./Home.module.scss";
import Museum from "./Museum";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import LoaderPage from "../../Components/LoaderPage/LoaderPage";

const Albums = () => {
  const { albums } = useTypedSelector((state) => state.albumsReducer);
  return (
    <Suspense fallback={<div>asd</div>}>
      <div className={s.albumCategory}>АЛЬБОМЫ</div>
      <div className={s.museumWrapper}>
        {albums.map((museum) => (
          <Museum
            avatar={museum.avatar}
            displayName={museum.displayName}
            name={museum.name}
            mapsLink={museum.mapsLink}
            museumOnlineLink=""
            key={museum.name}
            color="hsl(23,68%,71%)"
            isWide={museum.isWide}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default Albums;
