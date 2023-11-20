/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import { MessageItem } from "../MessageItem";
import "./style.css";

export const MessageBubbleUser = ({
  className,
  messageItemText = "Lorem ipsum dolor sit amet",
}) => {
  return (
    <div className={`message-bubble-user ${className} slide-in`}>
      <MessageItem
        className={"message-bubble-user-item"}
        divClassName="message-item-instance"
        property1="my-own"
        text={messageItemText}
      />
    </div>
  );
};

MessageBubbleUser.propTypes = {
  messageItemText: PropTypes.string,
  className: PropTypes.string,
};
