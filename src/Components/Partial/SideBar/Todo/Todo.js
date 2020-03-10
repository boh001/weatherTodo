import React, { useCallback, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Frame, DIV, TextWrap, IconWrap, ReviseInput } from "./Todo.style";

export default ({ id, setTodos, todos, todo }) => {
  const textRef = useRef("");
  const inputRef = useRef("");
  const delTodo = useCallback(e => {
    e.preventDefault();
    const newTodos = todos.filter((todo, key) => key != id);
    setTodos(newTodos);
    localStorage.setItem("todo", JSON.stringify(newTodos));
  });
  const ReviseOpen = useCallback(e => {
    e.preventDefault();
    const input = inputRef.current;
    const text = textRef.current;
    input.value = text.innerText;
    input.focus();
    if (input.style.opacity === "1") {
      input.style.opacity = "0";
      input.style.visibility = "hidden";
      text.style.opacity = "1";
    } else {
      input.style.opacity = "1";
      input.style.visibility = "visible";
      text.style.opacity = "0";
    }
  });
  const ReviseTodo = e => {
    e.preventDefault();
    const input = e.currentTarget;
    const text = textRef.current;
    if (e.keyCode === 13) {
      const newTodos = [...todos];
      newTodos[id] = e.currentTarget.value;
      setTodos(newTodos);
      localStorage.setItem("todo", JSON.stringify(newTodos));
      if (input.style.opacity === "1") {
        input.style.opacity = "0";
        text.style.opacity = "1";
      } else {
        input.style.opacity = "1";
        text.style.opacity = "0";
      }
    }
  };
  return (
    <>
      <Frame>
        <ReviseInput
          onKeyUp={e => ReviseTodo(e)}
          ref={inputRef}
          onBlur={e => {
            e.currentTarget.style.opacity = "0";
            textRef.current.style.opacity = "1";
          }}
        />
        <TextWrap ref={textRef}>{todo}</TextWrap>
        <DIV>
          <IconWrap onClick={e => ReviseOpen(e)}>
            <FontAwesomeIcon icon={faPencilAlt} size="ms" />
          </IconWrap>
          <IconWrap onClick={e => delTodo(e)}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </IconWrap>
        </DIV>
      </Frame>
    </>
  );
};
