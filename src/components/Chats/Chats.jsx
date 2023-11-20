import { MessageBubbleBot } from "../MessageBubbleBot";
import { MessageBubbleUser } from "../MessageBubbleUser";
import * as PropTypes from "prop-types";
import "./style.css";
import { useEffect } from "react";
export const Chats = ({ chats }) => {
  /**
   * updating cursor
   */
  useEffect(() => {
    const bottom = document.getElementById("bottom");
    if (bottom != null) {
      bottom.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  });
  return (
    <>
      <div className="chats">
        {chats.map((chat, index) => {
          if (chat.role === "bot") {
            return <MessageBubbleBot key={index} messageItemText={chat.text} />;
          }

          return <MessageBubbleUser key={index} messageItemText={chat.text} />;
        })}
      </div>
      <div id="bottom" />
    </>
  );
};

Chats.propTypes = {
  chats: PropTypes.array,
};
