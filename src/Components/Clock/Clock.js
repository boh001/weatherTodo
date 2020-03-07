import React from "react";
import { Clock, Greet, Frame } from "./Clock.style";
import { useW } from "store";

export default () => {
  const { time, greet, main } = useW();
  const { name } = JSON.parse(localStorage.getItem("user"));
  console.log("clock");

  return (
    <Frame src={main}>
      <Clock>{time}</Clock>
      <Greet>
        {greet}, {name}
      </Greet>
    </Frame>
  );
};
