import React, { createRef, FC, useEffect, useState } from 'react'
import s from "./album.module.scss";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "../../Components/svgComponents/ArrowLeftIcon";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { PageLoaderV2 } from '../../Components/PageLoaderV2'
import { ALL_GROUPS } from '../../constants/albums'
import { fetchAlbum } from '../../API/fetchAlbum'
import { isMuseum } from '../../utils/group'

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

type Props = {
  name: string
}

const AlbumPage: FC<Props> = ({ name }) => {
  const [mediaArray, setMediaArray] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const group = ALL_GROUPS.find((group) => group.name === name);
  const displayName = group?.displayName
  const onMapsLink = group?.onMapsLink
  const isMuseumGroup = group && isMuseum(group)
  const museumOnlineLink = isMuseumGroup ? group?.museumOnlineLink : undefined

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
    const fetchAndSetMedia = async () => {
      try {
        const media = await fetchAlbum(name)
        if (!media) return Error

        setMediaArray(media || [])
      } catch (error) {
        console.log('Error fetching media', error);
      }
    }

    fetchAndSetMedia()
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
        {mediaArray.map((img) => (
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
