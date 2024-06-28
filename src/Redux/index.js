import { albumsReducer } from './Reducers/albumsReducer'
import { homeReducer } from "./Reducers/homeReducer";

import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        albumsReducer,
        homeReducer,
    },
});