import React, { createRef, FC, useEffect } from "react";
import s from "./album.module.scss";
import { albumsPageT } from "../../types/albumsPageT";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import AlbumLoadingPage from "./AlbumLoadingPage";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "../../Components/svgComponents/ArrowLeftIcon";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { PageLoaderV2 } from '../../Components/PageLoaderV2'

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

const AlbumPage: FC<albumsPageT> = (props) => {
  const { name } = props;
  const { currentAlbum, loading, error, albums } = useTypedSelector((state) => state.albumsReducer);
  const { fetchAlbumAC } = useActions();

  const selectedAlbum = albums.filter((album) => album.name === name);
  const { displayName, onMapsLink } = selectedAlbum[0];

  const ref = createRef<HTMLInputElement>();

  const scrollAlbum = (e: { deltaY: number }) => {
    // if (ref.current) {
    //   ref.current.scrollTo({
    //     left: ref.current.scrollLeft + e.deltaY,
    //     left: ref.current.scrollLeft + e.deltaY,
    //   });
    // }
  };

  useEffect(() => {
    fetchAlbumAC(name);
  }, []);

  // if (loading) return <AlbumLoadingPage displayName={displayName} />;

  if (loading) return <PageLoaderV2 />

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
          <a target="_blank" href={onMapsLink} rel="noreferrer">
            <StyledButton>На карте</StyledButton>
          </a>
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

export default AlbumPage;
