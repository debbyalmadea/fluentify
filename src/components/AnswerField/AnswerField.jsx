/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import "./style.css";

export const AnswerField = (props) => {
  console.log(props);
  return <textarea {...props} className={"answer-field " + props.className} />;
};

AnswerField.propTypes = HTMLTextAreaElement.propTypes;
