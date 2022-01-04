import { createStore, IModuleStore } from "redux-dynamic-modules";
import { RootStateT } from "./Reducers";
import { getAlbumsModule } from "./Reducers/albumsReducer";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import { getThunkExtension } from "redux-dynamic-modules-thunk";
import { getMusicModule } from "./Reducers/homeReducer";

export const store: IModuleStore<RootStateT> = createStore(
  {
    initialState: {},
    extensions: [getSagaExtension(), getThunkExtension()],
  },
  getAlbumsModule(),
  getMusicModule()
);
