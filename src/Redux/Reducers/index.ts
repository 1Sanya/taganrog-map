import { combineReducers } from "redux";
import { albumsReducer } from "./albumsReducer";
import homeReducer from "./homeReducer";

export const rootReducer = combineReducers({ albumsReducer, homeReducer });

export type RootStateT = ReturnType<typeof rootReducer>;
