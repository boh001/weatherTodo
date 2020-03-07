import React, { useRef, useCallback } from "react";
import styled from "styled-components";
import TextInput from "./TextInput/TextInput";
const LoginFrame = styled.form.attrs({
  action: "/me"
})`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    &:first-child {
      margin-bottom: 70px;
    }
  }
`;
const LoginSubmit = styled.input.attrs({
  type: "submit",
  value: "로그인"
})`
  margin-top: 70px;
  width: 230px;
  cursor: pointer;
  height: 40px;
  border: 1px solid;
  background-color: blue;

  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export default () => {
  const nameRef = useRef("");
  const urlRef = useRef("");
  const login = useCallback(e => {
    const name = nameRef.current.value;
    const url = urlRef.current.value;
    console.log(name, url);
    localStorage.setItem("user", JSON.stringify({ name, url }));
    return true;
  });

  return (
    <>
      <LoginFrame onSubmit={e => login(e)}>
        <TextInput
          ref={nameRef}
          placeholder={"Write your name"}
          label={"Name"}
        />
        <TextInput
          ref={urlRef}
          placeholder={"Write your image-url"}
          label={"Image"}
        />
        <LoginSubmit />
      </LoginFrame>
    </>
  );
};
