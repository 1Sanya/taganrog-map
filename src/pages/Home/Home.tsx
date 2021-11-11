import React from "react";
import s from "./Home.module.scss";
// @ts-ignore
import bgVideo from "../../assets/video/bg1.mp4";
import HomeNav from "./HomeNav/HomeNav";

const Home = () => {
  return (
    <div className={s.wrapper}>
      <HomeNav />
      <video className={s.video} autoPlay loop muted>
        <source src={bgVideo} />
      </video>
    </div>
  );
};

export default Home;
