import React, { FC, useEffect } from "react";
import { Grid } from "@mui/material";
import s from "./Home.module.scss";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ReactPlayer from "react-player/lazy";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  height: 85vh;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;

  @media (min-width: 768px) {
    height: 92vh;
  }

  @media (min-width: 1200px) {
    height: 110vh;
  }
`;

const AboutVideo: FC = () => {
  const { bgVideo } = useTypedSelector((state) => state.homeReducer);
  const { fetchMainVideoAC } = useActions();

  useEffect(() => {
    fetchMainVideoAC();
  }, []);

  return (
    <>
      {/* <video className={s.video} poster={bgVideo} controls={true} autoPlay playsInline loop muted>*/}
      {/* Awesome code */}
      <video className={s.video} poster={bgVideo || undefined} autoPlay playsInline loop muted>
        {bgVideo && <source src={bgVideo} />}
      </video>

      <div className={s.mainWrapper}>
        {/* <ReactPlayer*/}
        {/*  style={{*/}
        {/*    position: "absolute",*/}
        {/*    top: 0,*/}
        {/*    left: 0,*/}
        {/*  }}*/}
        {/*  url={bgVideo}*/}
        {/*  playing={true}*/}
        {/*  muted*/}
        {/*  loop*/}
        {/*  width="100%"*/}
        {/*  height="100%"*/}
        {/* />*/}
        <div className={s.titlesWrapper}>
          <div className={s.title}>
            Красоты
            <br /> Таганрога
          </div>
          <div className={s.subtitle}>
            Архитектура,
            <br /> природа
            <br /> и онлайн-музеи
          </div>
        </div>
        <div className={s.runningStringWrapper}>
          <div className={s.runningString}>Можно открыть на картах Можно открыть на картах</div>
        </div>
      </div>
      <div className={s.arrow}>Там интересно</div>
    </>
  );
};

export default AboutVideo;
