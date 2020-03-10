import React, { useCallback, useState } from "react";
import Todo from "./Todo/Todo";
import { TodoList, TodoTheme, ToDos } from "./SideBar.style";
import TextInput from "../../TextInput/TextInput";
import { color } from "Components/Global/variable";

export default React.memo(() => {
  console.log("SideBar");

  if (!localStorage.getItem("todo")) {
    localStorage.setItem("todo", JSON.stringify([]));
  }
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todo")));

  const addTodo = useCallback(e => {
    e.preventDefault();

    if (e.keyCode === 13) {
      const text = e.currentTarget.value;
      const newTodo = [...todos, text];
      setTodos(newTodo);
      localStorage.setItem("todo", JSON.stringify(newTodo));
      e.currentTarget.value = "";
    }
  });

  return (
    <TodoList>
      <TodoTheme>Today's List</TodoTheme>
      <ToDos>
        {todos.map((todo, key) => {
          return (
            <Todo
              key={key}
              id={key}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ToDos>
      <TextInput
        event={addTodo}
        placeholder={"Write your to-do's"}
        color={"white"}
        label={"Title"}
        placeColor={"white"}
        labelColor={color.lightGreen}
      />
    </TodoList>
  );
});
