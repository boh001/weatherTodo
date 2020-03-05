import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Todo from "./Footer/Todo";
export const TodoList = styled.div.attrs({
  id: "sideBar"
})`
  position: fixed;
  height: 100%;
  left: 0;
  height: calc(100% - 35px);
  width: 200px;
  bottom: 35px;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: all ease 0.2s;
  color: white;
`;
const TodoTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 67px;
  width: 200px;
  border-bottom: 1px solid;
  font-size: 20px;
  font-weight: bold;
`;
const ToDos = styled.div`
  display: grid;
  grid-auto-rows: 50px;
  overflow: auto;
  height: 100%;
  padding-left: 5px;
`;

const ListInput = styled.input.attrs({
  type: "text",
  placeholder: "Write your Todo list..."
})`
  bottom: 0;
  height: 4%;
  width: 200px;
  padding-left: 10px;
  border: none;
  transition: all ease 0.5s;
  border-radius: 1px;
  &:focus {
    outline: none;
  }
`;
export default () => {
  const [todos, setTodos] = useState([]);
  const addTodo = useCallback(e => {
    e.preventDefault();
    if (e.keyCode === 13) {
      const text = e.currentTarget.value;
      const newTodo = [...todos, text];
      setTodos(newTodo);
      localStorage.setItem("todo", newTodo);
      e.currentTarget.value = "";
    }
  });
  return (
    <TodoList>
      <TodoTheme>Today's List</TodoTheme>
      <ToDos>
        {todos.map((todo, key) => {
          return <Todo key={key} todo={todo} />;
        })}
      </ToDos>

      <ListInput onKeyUp={e => addTodo(e)} />
    </TodoList>
  );
};
