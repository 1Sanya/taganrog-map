import React from "react";
import Museum from "./Museum";
import s from "./Home.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Museums = () => {
  const { museums } = useTypedSelector((state) => state.albumsReducer);
  return (
    <>
      <div className={s.albumCategory}>МУЗЕИ</div>
      <div className={s.museumWrapper}>
        {museums.map((museum) => (
          <Museum
            avatar={museum.avatar}
            displayName={museum.displayName}
            name={museum.name}
            mapsLink={museum.mapsLink}
            museumOnlineLink={museum.museumOnlineLink}
            key={museum.name}
            color={museum.color}
            isWide={true}
          />
        ))}
      </div>
    </>
  );
};

export default Museums;
