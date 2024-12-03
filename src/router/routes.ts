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
  SEARCH_ROUTE,
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

const MuseumLazy = lazy(() => import("../pages/Album/MuseumPage"));
const SearchLazy = lazy(() => import("../pages/Search/Search"));
const Album = lazy(() => import("../pages/Album/AlbumPage"));

export const routes = [
  {
    path: SEARCH_ROUTE,
    Element: SearchLazy,
  },
  {
    path: URBAN_MUSEUM_ROUTE,
    Element: MuseumLazy,
  },
  {
    path: CHEHOV_HOUSE_ROUTE,
    Element: MuseumLazy,
  },
  {
    path: CHEHOV_SHOP_ROUTE,
    Element: MuseumLazy,
  },
  {
    path: ART_ROUTE,
    Element: MuseumLazy,
  },
  {
    path: ALFERAKI_ROUTE,
    Element: Album,
  },
  {
    path: BOGUDONIA_ROUTE,
    Element: Album,
  },
  {
    path: SHMIDTA_ROUTE,
    Element: Album,
  },
  {
    path: ROUND_HOUSE_ROUTE,
    Element: Album,
  },
  {
    path: GRAVEYARD_ROUTE,
    Element: Album,
  },
  {
    path: TILE_ROUTE,
    Element: Album,
  },
  {
    path: GORKOGO_ROUTE,
    Element: Album,
  },
  {
    path: STONE_1ROAD_ROUTE,
    Element: Album,
  },
  {
    path: STONE_2ROAD_ROUTE,
    Element: Album,
  },
  {
    path: KRASNIY_ROUTE,
    Element: Album,
  },
  {
    path: ITALYANSKIY_ROUTE,
    Element: Album,
  },
  {
    path: EMBANKMENENT_ROUTE,
    Element: Album,
  },
  {
    path: VODOLECHEB_ROUTE,
    Element: Album,
  },
  {
    path: CVR_ROUTE,
    Element: Album,
  },
  {
    path: EUROPE_ROUTE,
    Element: Album,
  },
  {
    path: ROWS_ROUTE,
    Element: Album,
  },
  {
    path: GORKOGO_ROUTE,
    Element: Album,
  },
  {
    path: "/",
    Element: Home,
  },
];
