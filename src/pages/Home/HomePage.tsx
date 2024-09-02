import React, { lazy, useEffect, useRef, useState } from 'react'
import s from "./Home.module.scss";
import AboutVideo from "./AboutVideo";
import HomeNav from "./HomeNav/HomeNav";
import { Box } from '@mui/material'
import { useInView } from 'react-intersection-observer'

const MuseumsLazy = lazy(() => import("./Museums"));
const AlbumsLazy = lazy(() => import("./Albums"));
const OtherPhotosLazy = lazy(() => import("./OtherPhotos/index"));
const HomePage = () => {

  const { ref: preAlbumsRef, inView: isAlbumsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: preOtherPhotosRef, inView: isOtherPhotosInView } = useInView({
    triggerOnce: true,
  });

  const [scrollY, setScrollY] = useState<string>("");

  useEffect(() => {
    if (window) {
      setScrollY(String(window.sessionStorage.getItem("scrollTo")));
      if (scrollY) {
        document?.querySelector("." + scrollY)?.scrollIntoView();
      }
    }
  });

  return (
    <div className={s.wrapper}>
      <HomeNav />
      <AboutVideo />
      <MuseumsLazy />

      <Box ref={preAlbumsRef}>
        {isAlbumsInView && <AlbumsLazy />}
      </Box>

      <Box ref={preOtherPhotosRef}/>
      {isOtherPhotosInView && <OtherPhotosLazy />}

    </div>
  );
};

export default HomePage;
