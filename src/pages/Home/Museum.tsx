import React, { FC } from "react";
import { museumsT } from "../../Types/albumsPageT";
import { Link } from "react-router-dom";
import s from "./Museum.module.scss";

const Museum: FC<museumsT> = (props) => {
  const { avatar, displayName, color, isWide, name } = props;
  return (
    <div className={isWide ? `${s.wrapper} ${s.wideWrapper}` : `${s.wrapper} ${s.narrowWrapper}`}>
      <Link to={name}>
        <img className={s.img} src={avatar} alt="" />
        <div
          style={{
            background: `linear-gradient( to top, ${color} 50% , hsla(0, 0%, 50%, .05))`,
          }}
          className={s.nameWrapper}
        >
          <div className={s.name}>{displayName}</div>
        </div>
      </Link>
    </div>
  );
};

export default Museum;
