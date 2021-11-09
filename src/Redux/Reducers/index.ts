import { combineReducers } from "redux";
import { photosReducer } from "./photosReducer";

export const rootReducer = combineReducers({ photosReducer });

export type RootStateT = ReturnType<typeof rootReducer>;
