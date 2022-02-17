import React, { createRef, FC } from "react";
import { museumsT } from "../../Types/albumsPageT";
import { Link } from "react-router-dom";
import s from "./Museum.module.scss";

const Museum: FC<museumsT> = (props) => {
  const { avatar, displayName, color, isWide, name, textColor, index, museumOnlineLink } = props;
  const ref = createRef<HTMLInputElement>();

  function onClick() {
    // @ts-ignore
    window.sessionStorage.setItem("scrollTo", String(ref.current?.className));
  }

  return (
    <div
      onClick={onClick}
      className={isWide ? `${s.wrapper} ${s.wideWrapper}` : `${s.wrapper} ${s.narrowWrapper}`}
    >
      <div ref={ref} className={museumOnlineLink ? `museum${index}` : `album${index}`}>
        <Link to={name}>
          <img className={s.img} src={avatar} alt="" />
          <div
            style={{
              background: `linear-gradient( to top, ${color} 50% , hsla(0, 0%, 50%, .05))`,
            }}
            className={s.nameWrapper}
          >
            <div style={{ color: textColor }} className={s.name}>
              {displayName}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Museum;
