import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../Redux/ActionCreators/";

export const useActions = () => {
  const dispatch = useDispatch();
  console.log(ActionCreators);
  return bindActionCreators(ActionCreators, dispatch);
};
