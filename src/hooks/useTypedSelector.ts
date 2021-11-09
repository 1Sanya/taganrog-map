import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStateT } from "../Redux/Reducers";

export const useTypedSelector: TypedUseSelectorHook<RootStateT> = useSelector;
