import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { ChatFrame, Chat, SPAN, Option, ChangeUrl } from "./Chat.style";
export default () => {
  console.log("chat");
  const logout = useCallback(() => localStorage.removeItem("user"));
  const showUrl = useCallback(() => {
    const input = document.getElementById("url");
    console.log(input);

    if (input.style.visibility === "visible") {
      input.style.visibility = "hidden";
    } else {
      input.style.visibility = "visible";
    }
  });
  return (
    <>
      <ChatFrame>
        <Chat>
          <FontAwesomeIcon icon={faCog} size="lg" />
          <SPAN>
            <Option to="/" onClick={() => logout()}>
              Logout
            </Option>
            <ChangeUrl onClick={() => showUrl()}>Image</ChangeUrl>
          </SPAN>
        </Chat>
      </ChatFrame>
    </>
  );
};
