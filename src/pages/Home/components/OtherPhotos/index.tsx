import React, { createRef, useEffect, useState } from 'react'
import s from "./album.module.scss";
import AlbumLoadingPage from "../../../Album/AlbumLoadingPage";
import { fetchOtherPhotos } from '../../../../API/fetchOthersPhotos'

const OtherPhotos = () => {
  const [mediaArray, setMediaArray] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const ref = createRef<HTMLInputElement>();

  const scrollAlbum = (e: { deltaY: number }) => {
    // if (ref.current) {
    //   ref.current.scrollTo({
    //     left: ref.current.scrollLeft + e.deltaY,
    //   });t
    // }
  };

  useEffect(() => {
    const fetchAndSetOtherMedia = async () => {
      try {
        const otherMedia = await fetchOtherPhotos()
        if (!otherMedia) return

        setMediaArray(otherMedia)
      } catch (error) {
        console.log('Error on loading other media:', error)
      }
    }

    fetchAndSetOtherMedia()
  }, [])

  if (loading) return <AlbumLoadingPage displayName={"Грузиться, скоро увидете :3"} />;

  return (
    <div onWheel={scrollAlbum} ref={ref} className={s.wrapper}>
      <div className={s.photosWrapper}>
        {mediaArray.map((img) => (
          <img className={s.img} src={img} key={img} alt="" />
        ))}
      </div>
    </div>
  );
};

export default OtherPhotos;
