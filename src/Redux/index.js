import { createStore } from "redux-dynamic-modules";
import { getAlbumsModule } from "./Reducers/albumsReducer";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import { getThunkExtension } from "redux-dynamic-modules-thunk";
import { getMusicModule } from "./Reducers/homeReducer";

export const store = createStore(
    {
        initialState: {},
        extensions: [
            getSagaExtension ? getSagaExtension() : undefined,
            getThunkExtension ? getThunkExtension() : undefined
        ].filter(Boolean),
    },
    [getAlbumsModule(), getMusicModule()]
);
