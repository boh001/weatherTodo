import React from "react";
import styled from "styled-components";
import TextInput from "./TextInput/TextInput";
const LoginFrame = styled.div`
  width: 400px;
  height: 400px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LoginName = styled.input.attrs({
  type: "text"
})`
  position: relative;
`;
const LoginLabel = styled.label`
  position: absolute;
`;
export default () => {
  return (
    <LoginFrame>
      <TextInput placeholder={""} label={"Name"} />
    </LoginFrame>
  );
};
