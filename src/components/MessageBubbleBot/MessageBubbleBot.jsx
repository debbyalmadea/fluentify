/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import { MascotAvatar } from "../../icons/MascotAvatar";
import { MessageItem } from "../MessageItem";
import "./style.css";

export const MessageBubbleBot = ({
  className,
  messageItemText = "consectetur adipiscing elit",
  loading = false,
}) => {
  return (
    <div className={`message-bubble-bot ${className} slide-in`}>
      <MascotAvatar className="mascot-avatar" />
      {loading ? (
        <MessageItem
          className={"message-bubble-bot-item"}
          divClassName="design-component-instance-node"
          property1="my-own"
          text="Loading..."
        />
      ) : (
        <MessageItem
          className={"message-bubble-bot-item"}
          divClassName="design-component-instance-node"
          property1="my-own"
          text={messageItemText}
        />
      )}
    </div>
  );
};

MessageBubbleBot.propTypes = {
  messageItemText: PropTypes.string,
  messageItemPropertyOtherClassName: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
};
