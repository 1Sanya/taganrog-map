import React, { createRef, FC, Suspense, useEffect } from "react";
import { albumsPageT } from "../../Types/albumsPageT";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import s from "./album.module.scss";
import AlbumLoadingPage from "./AlbumLoadingPage";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "../../Components/svgComponents/ArrowLeftIcon";

const Album: FC<albumsPageT> = (props) => {
  const { name } = props;
  const { currentAlbum, loading, error, museums } = useTypedSelector(
    (state) => state.albumsReducer
  );
  const { fetchAlbumAC } = useActions();

  const selectedAlbum = museums.filter((album) => album.name === name);
  const { displayName, mapsLink, museumOnlineLink } = selectedAlbum[0];

  const ref = createRef<HTMLInputElement>();

  const scrollAlbum = (e: { deltaY: number }) => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft + e.deltaY,
      });
    }
  };

  useEffect(() => {
    fetchAlbumAC(name);
  }, []);

  if (loading)
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <AlbumLoadingPage displayName={displayName} />;
      </Suspense>
    );

  return (
    <div onWheel={scrollAlbum} ref={ref} className={s.wrapper}>
      <div className={s.header}>
        <Link to={"/"}>
          <button className={s.arrowIcon}>
            <ArrowLeftIcon />
          </button>
        </Link>
        <div>
          <a target="_blank" href={mapsLink} rel="noreferrer">
            <button className={s.mapIcon}>На карте</button>
          </a>
        </div>
      </div>
      <div className={s.photosWrapper}>
        {currentAlbum.map((img) => (
          <img className={s.img} src={img} key={img} alt="" />
        ))}
      </div>
      <div className={s.nameWrapper}>
        <div className={s.name}>{displayName}</div>
      </div>
    </div>
  );
};

export default Album;
