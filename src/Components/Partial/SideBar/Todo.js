import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Frame = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  word-wrap: break-word;
  overflow-wrap: break-word;
  height: 10%;
  margin-bottom: 10px;
  overflow-wrap: break-word;
`;
const Checkbox = styled.input.attrs({
  type: "checkbox"
})`
  border: 1px solid;
  width: 20px;
  height: 20px;
  background-color: none;
  color: green;
`;
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
`;
const IconWrap = styled.div``;
export default ({ todo }) => {
  console.log("todo");

  return (
    <Frame>
      <TextWrap>{todo}</TextWrap>
      <IconWrap>
        <FontAwesomeIcon icon={faPencilAlt} size="ms" />
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </IconWrap>
    </Frame>
  );
};
