import React from "react";
import s from "./Home.module.scss";
import Museum from "./Museum";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Albums = () => {
  const { museums } = useTypedSelector((state) => state.albumsReducer);
  return (
    <>
      <div className={s.albumCategory}>Музеи</div>
      <div className={s.museumWrapper}>
        {museums.map((museum, index) => (
          <Museum
            index={index}
            avatar={museum.avatar}
            displayName={museum.displayName}
            name={museum.name}
            mapsLink={museum.mapsLink}
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
