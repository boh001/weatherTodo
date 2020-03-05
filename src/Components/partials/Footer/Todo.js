import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
export default ({ todo }) => {
  return (
    <Frame>
      <Checkbox />
      {todo}
    </Frame>
  );
};
