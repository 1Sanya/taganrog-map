import React, { lazy, useEffect, useState } from 'react'
import s from "./Home.module.scss";
import AboutVideo from "./AboutVideo";
import HomeNav from "./components/HomeNav/HomeNav";
import { Box } from '@mui/material'
import { useInView } from 'react-intersection-observer'

const MuseumsLazy = lazy(() => import("./Museums"));
const AlbumsLazy = lazy(() => import("./Albums"));
const OtherPhotosLazy = lazy(() => import("./components/OtherPhotos/index"));
const HomePage = () => {

  const { ref: preAlbumsRef, inView: isAlbumsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: preOtherPhotosRef, inView: isOtherPhotosInView } = useInView({
    triggerOnce: true,
  });

  /* Scroll to last selected item when user return from detailed page
  * Need to be fixed. Now it broke regular page scrolling */
  // useEffect(() => {
  //   const scrollToIndex = window?.sessionStorage.getItem("scrollTo")
  //
  //   if (!scrollToIndex) return
  //
  //   document?.querySelector("." + scrollToIndex)?.scrollIntoView();
  // })

  return (
    <div className={s.wrapper}>
      <HomeNav />
      <AboutVideo />
      <MuseumsLazy />

      <Box ref={preAlbumsRef} sx={{ minHeight: 300 }}>
        {isAlbumsInView && <AlbumsLazy />}
      </Box>

      <Box ref={preOtherPhotosRef}>
        {isOtherPhotosInView && <OtherPhotosLazy />}
      </Box>

    </div>
  );
};

export default HomePage;
