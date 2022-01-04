import React, { createRef, FC, useEffect } from "react";
import s from "./album.module.scss";
import { albumsPageT } from "../../Types/albumsPageT";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import AlbumLoadingPage from "./AlbumLoadingPage";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "../../Components/svgComponents/ArrowLeftIcon";

const AlbumPage: FC<albumsPageT> = (props) => {
  const { name } = props;
  const { currentAlbum, loading, error, albums } = useTypedSelector((state) => state.albumsReducer);
  const { fetchAlbumAC } = useActions();

  const selectedAlbum = albums.filter((album) => album.name === name);
  const { displayName, mapsLink } = selectedAlbum[0];

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

  if (loading) return <AlbumLoadingPage displayName={displayName} />;

  return (
    <div onWheel={scrollAlbum} ref={ref} className={s.wrapper}>
      <div className={s.header}>
        <Link to={"/"}>
          <button className={s.arrowIcon}>
            <ArrowLeftIcon />
          </button>
        </Link>
        <a target="_blank" href={mapsLink} rel="noreferrer">
          <button className={s.mapIcon}>На карте</button>
        </a>
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

export default AlbumPage;
