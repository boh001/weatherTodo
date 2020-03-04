import React from "react";
import styled from "styled-components";
export const TodoList = styled.div.attrs({
  id: "sideBar"
})`
  position: fixed;
  background-color: yellow;
  height: 100%;
  left: 0;
  height: calc(100% - 20px);
  width: 200px;
  bottom: 30px;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: all ease 0.2s;
`;
const TodoTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  background-color: pink;
  font-size: 20px;
  font-weight: bold;
  color: #212121;
`;
const ToDos = styled.div`
  height: 100%;
  background-color: blue;
`;

const ListInput = styled.input.attrs({
  type: "text",
  placeholder: "Write your Todo list..."
})`
  bottom: 0;
  height: 4%;
  width: 100%;
  padding-left: 10px;
  border: none;
`;
export default () => {
  return (
    <TodoList>
      <TodoTheme>Today's List</TodoTheme>
      <ToDos></ToDos>

      <ListInput />
    </TodoList>
  );
};
