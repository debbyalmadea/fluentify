// rootReducer.js
import { combineReducers } from "redux";
import topicReducer from "./topicReducer";
import answersReducer from "./answerReducer";

const rootReducer = combineReducers({
  topic: topicReducer,
  answers: answersReducer,
  // ...other reducers if you have more
});

export default rootReducer;
