import styled from "styled-components";
import React from "react";
import TodoIcon from "./TodoIcon";
import Chat from "./Chat";
const Footer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: bold;
  color: white;
  padding: 10px;
`;
const Ment = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default () => {
  return (
    <Footer>
      <TodoIcon />
      <Ment>hi</Ment>
      <Chat />
    </Footer>
  );
};
