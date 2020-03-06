import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { ChatFrame, Chat, SPAN } from "./Chat.style";
export default () => {
  console.log("chat");

  return (
    <ChatFrame>
      <Chat>
        <FontAwesomeIcon icon={faCog} size="lg" />
      </Chat>
    </ChatFrame>
  );
};
