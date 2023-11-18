// reducer.js
import { SET_TOPIC } from "../actions";

const initialState = "Travel"; // Initial state for the topic

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOPIC:
      return action.payload;
    default:
      return state;
  }
};

export default topicReducer;
