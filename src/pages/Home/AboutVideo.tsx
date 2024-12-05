import React, { FC, useEffect, useState } from 'react'
import { Grid } from "@mui/material";
import s from "./Home.module.scss";
import styled from "styled-components";
import { fetchMainVideo } from '../../API/fetchMainVideo'

const AboutVideo: FC = () => {
  const [videoSrc, setVideoSrc] = useState<null | string>(null)

  useEffect(() => {
    const fetchAndSetVideoSrc = async () => {
      try {
        const videoSrcResponse = await fetchMainVideo();
        if (videoSrcResponse) {
          setVideoSrc(videoSrcResponse)
        }
      } catch (error) {
        console.log('Error on main video loading', error)
      }
    }

    fetchAndSetVideoSrc()
  }, []);

  return (
    <>
      {/* <video className={s.video} poster={videoSrc} controls={true} autoPlay playsInline loop muted>*/}
      {/* Awesome code */}
      <video className={s.video} poster={videoSrc || undefined} autoPlay playsInline loop muted>
        {videoSrc && <source src={videoSrc} />}
      </video>

      <div className={s.mainWrapper}>
        {/* <ReactPlayer*/}
        {/*  style={{*/}
        {/*    position: "absolute",*/}
        {/*    top: 0,*/}
        {/*    left: 0,*/}
        {/*  }}*/}
        {/*  url={videoSrc}*/}
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
