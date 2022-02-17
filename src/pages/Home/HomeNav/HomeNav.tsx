import React, { FC, useEffect, useState } from "react";
import { Grid, Container } from "@material-ui/core";
import s from "./HomeNav.module.scss";
import { Link } from "react-router-dom";
import SearchIcon from "../../../Components/svgComponents/SearchIcon";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  padding: 30px 20px 30px 0;
  background: linear-gradient(hsla(300, 2%, 20%, 0.85) 0.5%, hsla(300, 7%, 75%, 0.01));
`;

const StyledLink = styled(Link)`
  color: #fff;

  &:hover {
    color: #f9dcdb;
  }
`;

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
    <StyledGrid container>
      <Container>
        <Grid container>
          <Grid item xs={8} />
          <Grid item xs={4}>
            <Grid container justifyContent="flex-end">
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
              <StyledLink to="/search">
                <SearchIcon />
              </StyledLink>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledGrid>
  );
};

export default HomeNav;
