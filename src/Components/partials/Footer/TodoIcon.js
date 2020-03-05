import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { showLists } from "./Footer.js.js";

const TodoFrame = styled.div`
  width: 100%;
`;
const Todo = styled.div`
  width: 100px;
  cursor: pointer;
`;
const SPAN = styled.span`
  margin: 0px 5px 0px 5px;
`;

export default () => {
  return (
    <>
      <TodoFrame>
        <Todo onClick={e => showLists(e)}>
          <FontAwesomeIcon icon={faBars} size="md" />
          <SPAN>Todo</SPAN>
        </Todo>
      </TodoFrame>
    </>
  );
};
