import React from "react";
import s from "./Home.module.scss";
import Card from "./Card";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Albums = () => {
  const { albums } = useTypedSelector((state) => state.albumsReducer);
  return (
    <>
      <div className={s.albumCategory}>АЛЬБОМЫ</div>
      <div className={s.museumWrapper}>
        {albums.map((museum, index) => (
          <Card
            index={index}
            mediaUrl={museum.mediaUrl}
            displayName={museum.displayName}
            name={museum.name}
            onMapsLink={museum.onMapsLink}
            museumOnlineLink=""
            key={museum.name}
            color={museum.color ?? "hsl(23,68%,71%)"}
            textColor={museum.textColor ?? "#ffffff"}
            isWide={museum.isWide}
            isVideoPreview={museum.isVideoPreview}
          />
        ))}
      </div>
      <div className={s.albumCategory}>Красотки одиночки</div>
    </>
  );
};

export default Albums;
