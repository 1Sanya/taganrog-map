import React from "react";
// src
import s from "./Home.module.scss";
import Card from "./Card";
import { MUSEUMS } from '../../constants/albums'

const Albums = () => {
  return (
    <>
      <div className={s.albumCategory}>Музеи</div>
      <div className={s.museumWrapper}>
        {MUSEUMS.map((museum, index) => (
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
