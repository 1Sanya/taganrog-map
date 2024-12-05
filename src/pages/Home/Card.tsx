import React, { createRef, FC } from "react";
import { Link } from "react-router-dom";
import s from "./Museum.module.scss";
import { isImageUrl } from 'src/utils'
import { Group, Museum } from '../../constants/albums'

const Card: FC<Museum & { index: number }> = (props) => {
  const { mediaUrl, displayName, color, isWide, name, textColor, index, isVideoPreview, museumOnlineLink } = props;
  const ref = createRef<HTMLInputElement>();

  function onClick() {
    window.sessionStorage.setItem("scrollTo", String(ref.current?.className));
  }

  return (
    <div
      onClick={onClick}
      className={isWide ? `${s.wrapper} ${s.wideWrapper}` : `${s.wrapper} ${s.narrowWrapper}`}
    >
      <div ref={ref} className={museumOnlineLink ? `museum${index}` : `album${index}`}>
        <Link to={name}>
          {isImageUrl(mediaUrl) && (
            <img className={s.img} src={mediaUrl} alt={displayName} />
          )}
          {isVideoPreview && (
            <div className={s.videoWrapper}>
              <video className={s.video} muted autoPlay loop playsInline poster={mediaUrl || undefined}>
                <source src={mediaUrl} />
              </video>
            </div>
          )}
          {/*{isVideoUrl(mediaUrl) && (*/}
          {/*// Render loop, muted, witout controls player*/}

          {/*)}*/}
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

export default Card;
