import { MessageBubbleBot } from "../MessageBubbleBot";
import { MessageBubbleUser } from "../MessageBubbleUser";
import * as PropTypes from "prop-types";
import "./style.css";
export const Chats = ({ chats }) => {
  return (
    <div className="chats">
      {chats.map((chat, index) => {
        if (chat.role === "bot") {
          return <MessageBubbleBot key={index} messageItemText={chat.text} />;
        }

        return <MessageBubbleUser key={index} messageItemText={chat.text} />;
      })}
    </div>
  );
};

Chats.propTypes = {
  chats: PropTypes.array,
};
