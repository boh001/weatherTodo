import React from "react";
import TodoIcon from "./TodoIcon";
import Chat from "./Chat";
import { Footer, Ment } from "./Footer.style";

export default React.memo(() => {
  console.log("footer");

  return (
    <Footer>
      <TodoIcon />
      <Ment>hi</Ment>
      <Chat />
    </Footer>
  );
});
