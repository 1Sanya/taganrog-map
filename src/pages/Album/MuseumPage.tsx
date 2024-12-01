import React, { createRef, FC, Suspense, useEffect } from "react";
import { Grid } from "@mui/material";
import { albumsPageT } from "../../Types/albumsPageT";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import s from "./album.module.scss";
import AlbumLoadingPage from "./AlbumLoadingPage";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "../../Components/svgComponents/ArrowLeftIcon";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  position: fixed;
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

const Album: FC<albumsPageT> = (props) => {
  const { name } = props;
  const { currentAlbum, loading, error, museums } = useTypedSelector(
    (state) => state.albumsReducer
  );
  const { fetchAlbumAC } = useActions();

  const selectedAlbum = museums.filter((album) => album.name === name);
  const { displayName, onMapsLink, museumOnlineLink } = selectedAlbum[0];

  const ref = createRef<HTMLInputElement>();

  const scrollAlbum = (e: { deltaY: number }) => {
    // if (ref.current) {
    //   ref.current.scrollTo({
    //     left: ref.current.scrollLeft + e.deltaY,
    //   });
    // }
  };

  useEffect(() => {
    fetchAlbumAC(name);
  }, []);

  if (loading)
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <AlbumLoadingPage displayName={displayName} />;
      </Suspense>
    );

  return (
    <div onWheel={scrollAlbum} ref={ref} className={s.wrapper}>
      <StyledGrid container justifyContent="space-between">
        <Grid item>
          <Link to={"/"}>
            <StyledButton className={s.arrowIcon}>
              <ArrowLeftIcon />
            </StyledButton>
          </Link>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <a target="_blank" href={onMapsLink} rel="noreferrer">
                <StyledButton>На карте</StyledButton>
              </a>
            </Grid>
            {museumOnlineLink && (
              <Grid item>
                <a target="_blank" href={museumOnlineLink} rel="noreferrer">
                  <StyledButton>Посетить онлайн</StyledButton>
                </a>
              </Grid>
            )}
          </Grid>
        </Grid>
      </StyledGrid>
      <div className={s.photosWrapper}>
        {currentAlbum.map((img) => (
          <img className={s.img} src={img} key={img} alt="" />
        ))}
      </div>
      <div className={s.nameWrapper}>
        <div className={s.name}>{displayName}</div>
      </div>
    </div>
  );
};

export default Album;
