import React from "react";
import styled from "styled-components";
import Intro from "Components/Intro/Intro";
import Login from "Components/Login";
const BigFrame = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default () => {
  return (
    <BigFrame>
      <Intro />
      <Login />
    </BigFrame>
  );
};
