import React, { FC, useEffect, useState } from "react";
import s from "./HomeNav.module.scss";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";

const StyledGrid = styled(Grid)`
  background: linear-gradient(hsla(300, 2%, 20%, 0.85) 0.5%, hsla(300, 7%, 75%, 0.01));
`;

const StyledButton = styled.button`
  margin: 20px 14px;
  padding: 4px 14px;
  outline: 1px #fff solid;

  color: #fff;
  width: 6.5em;
  height: 2.8em;

  @media (min-width: 900px) {
    width: 10em;
    font-size: 18px;
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
    if (!music) return;
    setAudio(new Audio(music));
  }, [music]);

  useEffect(() => {
    musicPlaying ? audio.play() : audio.pause();
  }, [musicPlaying]);

  return (
    <StyledGrid container>
      <Container>
        <Grid container>
          <Grid item xs={5} />
          <Grid item xs={7}>
            <Grid container justifyContent="flex-end" alignItems="center">
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
              {/* <StyledLink to="/search">*/}
              {/* <SearchIcon />*/}
              {/* </StyledLink>*/}
              <Grid item>
                <a target="_blank" href="https://1sanya.ru" rel="noreferrer">
                  <StyledButton>Страница автора</StyledButton>
                  {/* <Button>Страница автора</Button>*/}
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledGrid>
  );
};

export default HomeNav;
