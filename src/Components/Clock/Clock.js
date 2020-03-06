import React, { useState, useEffect, useCallback } from "react";
import { Clock, Greet, Frame } from "./Clock.style";
import { useW } from "store";

export default () => {
  const { time, greet, main } = useW();
  console.log("clock");

  return (
    <Frame src={main}>
      <Clock>{time}</Clock>
      <Greet>{greet}</Greet>
    </Frame>
  );
};
