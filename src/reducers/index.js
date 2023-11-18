// rootReducer.js
import { combineReducers } from "redux";
import topicReducer from "./topicReducer";

const rootReducer = combineReducers({
  topic: topicReducer,
  // ...other reducers if you have more
});

export default rootReducer;
