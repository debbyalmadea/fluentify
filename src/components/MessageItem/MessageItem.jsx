/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import "./style.css";

export const MessageItem = ({
  property1,
  className,
  divClassName,
  text = "Message content goes here",
}) => {
  return (
    <div className={`message-item ${property1} ${className}`}>
      <p className={`message-content-goes ${divClassName}`}>{text}</p>
    </div>
  );
};

MessageItem.propTypes = {
  property1: PropTypes.oneOf(["my-own", "other-user"]),
  text: PropTypes.string,
  className: PropTypes.string,
  divClassName: PropTypes.string,
};
