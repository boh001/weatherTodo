import React from "react";
import styled from "styled-components";
export const TodoList = styled.div.attrs({
  id: "sideBar"
})`
  position: fixed;
  background-color: yellow;
  height: 100%;
  left: 0;
  width: 150px;
  bottom: 20px;
  display: none;
  flex-direction: column;
  justify-content: space-bewteen;
  transition: all ease 2s;
`;
const TodoTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 10%;
  background-color: pink;
  font-size: 20px;
  font-weight: bold;
`;
const ToDos = styled.div`
  height: 100%;
  background-color: blue;
`;
const ListInput = styled.input.attrs({
  type: "text",
  placeholder: "Write yours"
})`
  bottom: 0;
  width: 100%;
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
