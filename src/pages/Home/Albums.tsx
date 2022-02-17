import React from "react";
import s from "./Home.module.scss";
import Museum from "./Museum";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Albums = () => {
  const { albums } = useTypedSelector((state) => state.albumsReducer);
  return (
    <>
      <div className={s.albumCategory}>АЛЬБОМЫ</div>
      <div className={s.museumWrapper}>
        {albums.map((museum, index) => (
          <Museum
            index={index}
            avatar={museum.avatar}
            displayName={museum.displayName}
            name={museum.name}
            mapsLink={museum.mapsLink}
            museumOnlineLink=""
            key={museum.name}
            color={museum.color ?? "hsl(23,68%,71%)"}
            textColor={museum.textColor ?? "#ffffff"}
            isWide={museum.isWide}
          />
        ))}
      </div>
      <div className={s.albumCategory}>Красотки одиночки</div>
    </>
  );
};

export default Albums;
