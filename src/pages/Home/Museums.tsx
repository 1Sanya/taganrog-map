import React from "react";
import s from "./Home.module.scss";
import Card from "./Card";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Albums = () => {
  const albumsReducer = useTypedSelector((state) => state.albumsReducer);

  const { museums } = albumsReducer

  return (
    <>
      <div className={s.albumCategory}>Музеи</div>
      <div className={s.museumWrapper}>
        {museums.map((museum, index) => (
          <Card
            index={index}
            mediaUrl={museum.mediaUrl}
            displayName={museum.displayName}
            name={museum.name}
            onMapsLink={museum.onMapsLink}
            museumOnlineLink={museum.museumOnlineLink && museum.museumOnlineLink}
            key={museum.name}
            color={museum.color ?? "hsl(23,68%,71%)"}
            textColor={museum.textColor ?? "#ffffff"}
            isWide={museum.isWide}
          />
        ))}
      </div>
    </>
  );
};

export default Albums;
