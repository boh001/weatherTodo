import React, { useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const TodoFrame = styled.div`
  width: 100%;
`;
const Todo = styled.div`
  width: 100px;
  cursor: pointer;
`;
const SPAN = styled.span`
  font-size: 20px;
  margin: 0px 5px 0px 5px;
`;

export default () => {
  console.log("todoIcon");

  const showLists = useCallback(e => {
    e.preventDefault();
    const sideBar = document.querySelector("#sideBar");
    if (sideBar.style.visibility === "visible") {
      sideBar.style.visibility = "hidden";
      sideBar.style.opacity = "0";
    } else {
      sideBar.style.visibility = "visible";
      sideBar.style.opacity = "1";
    }
  });
  return (
    <>
      <TodoFrame>
        <Todo onClick={e => showLists(e)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
          <SPAN>Todo</SPAN>
        </Todo>
      </TodoFrame>
    </>
  );
};
