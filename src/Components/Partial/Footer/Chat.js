import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";

const ChatFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Chat = styled.div`
  cursor: pointer;
`;
const SPAN = styled.span`
  margin-right: 5px;
`;

export default () => {
  console.log("chat");

  return (
    <ChatFrame>
      <Chat>
        <SPAN>Chat</SPAN>
        <FontAwesomeIcon icon={faCommentAlt} size="md" />
      </Chat>
    </ChatFrame>
  );
};
