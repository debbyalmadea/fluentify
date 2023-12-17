// actions.js
export const SET_TOPIC = "SET_TOPIC";

export const setTopic = (topic) => ({
  type: SET_TOPIC,
  payload: topic,
});

export const SAVE_ANSWER = "SAVE_ANSWER";

export const saveAnswer = (questionId, answer) => ({
  type: SAVE_ANSWER,
  payload: { questionId, answer },
});

export const RESET = "RESET";
export const reset = () => ({
  type: RESET,
});
