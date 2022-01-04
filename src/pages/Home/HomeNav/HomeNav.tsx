import React, { FC, useEffect, useState, Suspense } from "react";
import s from "./HomeNav.module.scss";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Components/svgComponents/SearchIcon";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const HomeNav: FC = () => {
  const { music } = useTypedSelector((state) => state.homeReducer);
  const { fetchMusicAC } = useActions();
  const [audio, setAudio] = useState(new Audio());
  const [musicPlaying, setMusicPlaying] = useState(false);
  audio.loop = true;

  useEffect(() => {
    fetchMusicAC();
  }, []);

  useEffect(() => {
    setAudio(new Audio(music));
  }, [music]);

  useEffect(() => {
    musicPlaying ? audio.play() : audio.pause();
  }, [musicPlaying]);

  return (
    <div className={s.wrapper}>
      <div className={s.itemsWrapper}>
        <div onClick={() => setMusicPlaying(!musicPlaying)} className={s.musicWrapper}>
          <div
            className={
              musicPlaying
                ? `${s.musicBar} ${s.musicBar1} ${s.musicBarOn}`
                : `${s.musicBar} ${s.musicBar1}`
            }
          />
          <div
            className={
              musicPlaying
                ? `${s.musicBar} ${s.musicBar2} ${s.musicBarOn}`
                : `${s.musicBar} ${s.musicBar2}`
            }
          />
          <div
            className={
              musicPlaying
                ? `${s.musicBar} ${s.musicBar3} ${s.musicBarOn1}`
                : `${s.musicBar} ${s.musicBar3}`
            }
          />
          <div
            className={
              musicPlaying
                ? `${s.musicBar} ${s.musicBar4} ${s.musicBarOn}`
                : `${s.musicBar} ${s.musicBar4}`
            }
          />
          <div
            className={
              musicPlaying
                ? `${s.musicBar} ${s.musicBar5} ${s.musicBarOn1}`
                : `${s.musicBar} ${s.musicBar5}`
            }
          />
        </div>
        <Link className={s.searchIcon} to="/search">
          <SearchIcon />
        </Link>
      </div>
    </div>
  );
};

export default HomeNav;
