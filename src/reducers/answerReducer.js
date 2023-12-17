import { RESET, SAVE_ANSWER } from "../actions";

const initialState = {};

const answersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ANSWER:
      return {
        ...state,
        [action.payload.questionId]: action.payload.answer,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default answersReducer;
