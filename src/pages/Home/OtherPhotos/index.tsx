import React, { createRef, useEffect } from "react";
import s from "./album.module.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import AlbumLoadingPage from "../../Album/AlbumLoadingPage";
import { map } from "lodash";

const OtherPhotos = () => {
  const { photos, photosIsLoading } = useTypedSelector((state) => state.homeReducer);
  const { fetchOtherPhotosAC } = useActions();
  const ref = createRef<HTMLInputElement>();

  const scrollAlbum = (e: { deltaY: number }) => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft + e.deltaY,
      });
    }
  };

  useEffect(() => {
    fetchOtherPhotosAC();
  }, []);

  if (photosIsLoading) return <AlbumLoadingPage displayName={"Грузиться, скоро увидете :3"} />;

  return (
    <div onWheel={scrollAlbum} ref={ref} className={s.wrapper}>
      <div className={s.photosWrapper}>
        {map(photos, (img: any) => (
          <img className={s.img} src={img} key={img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default OtherPhotos;
