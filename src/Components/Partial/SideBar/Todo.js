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
  height: 40px;
  margin-bottom: 10px;
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
  word-wrap: break-word;

  word-break: break-all;
  word-wrap: break-word;
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
