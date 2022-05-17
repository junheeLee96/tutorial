import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import cnt from "./cnt";

const rootReducer = combineReducers({
  counter,
  todos,
  cnt,
});

export default rootReducer;
