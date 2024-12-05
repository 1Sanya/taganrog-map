import {
  ALFERAKI_ROUTE,
  ART_ROUTE,
  BOGUDONIA_ROUTE,
  CHEHOV_HOUSE_ROUTE,
  CHEHOV_SHOP_ROUTE,
  CVR_ROUTE,
  EMBANKMENENT_ROUTE,
  GORKOGO_ROUTE,
  GRAVEYARD_ROUTE,
  ITALYANSKIY_ROUTE,
  KRASNIY_ROUTE,
  ROUND_HOUSE_ROUTE,
  ROWS_ROUTE,
  SHMIDTA_ROUTE,
  STONE_1ROAD_ROUTE,
  STONE_2ROAD_ROUTE,
  TILE_ROUTE,
  URBAN_MUSEUM_ROUTE,
  VODOLECHEB_ROUTE,
  EUROPE_ROUTE,
} from "./constants";
import { lazy } from "react";
import Home from "../pages/Home/HomePage";

const AlbumLazy = lazy(() => import("../pages/Album/AlbumPage"));

export const routes = [
  {
    path: URBAN_MUSEUM_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: CHEHOV_HOUSE_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: CHEHOV_SHOP_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: ART_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: ALFERAKI_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: BOGUDONIA_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: SHMIDTA_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: ROUND_HOUSE_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: GRAVEYARD_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: TILE_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: GORKOGO_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: STONE_1ROAD_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: STONE_2ROAD_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: KRASNIY_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: ITALYANSKIY_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: EMBANKMENENT_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: VODOLECHEB_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: CVR_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: EUROPE_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: ROWS_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: GORKOGO_ROUTE,
    Element: AlbumLazy,
  },
  {
    path: "/",
    Element: Home,
  },
];
