import React, { useCallback } from "react";
import styled from "styled-components";

const Todo = styled.div`
  width: 100%;
`;

export default () => {
  const showLists = useCallback(e => {
    e.preventDefault();
    const sideBar = document.querySelector("#sideBar");
    if (sideBar.style.display === "flex") {
      sideBar.style.display = "none";
    } else {
      sideBar.style.display = "flex";
    }
  });
  return (
    <>
      <Todo onClick={e => showLists(e)}>Todo</Todo>
    </>
  );
};
