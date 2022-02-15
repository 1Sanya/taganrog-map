import React, { lazy } from "react";
import s from "./Home.module.scss";
import AboutVideo from "./AboutVideo";
import HomeNav from "./HomeNav/HomeNav";

const MuseumsLazy = lazy(() => import("./Museums"));
const AlbumsLazy = lazy(() => import("./Albums"));
const OtherPhotosLazy = lazy(() => import("./OtherPhotos/index"));

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <HomeNav />
      <AboutVideo />
      <MuseumsLazy />
      <AlbumsLazy />
      <OtherPhotosLazy />
    </div>
  );
};

export default HomePage;
