import React, { useState, useEffect, useReducer } from "react";
import { Clock, Greet, Frame } from "./Clock.style";
import { useW } from "store";
import { clockReducer } from "reducer";
export default () => {
  const [time, setTime] = useState("");
  const [initMent, setMent] = useState("");
  const initClock = { ment: "", time: "" };
  const [initTime, dispatchTime] = useReducer(clockReducer, initClock);
  const tictoc = () => dispatchTime({ type: "tictoc" });
  const changeMent = () => dispatchTime({ type: "changeMent" });
  const tms = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const time = `${h < 10 ? `0${h}` : h} : ${m < 10 ? `0${m}` : m} : ${
      s < 10 ? `0${s}` : s
    }`;
    const ment = `${
      h > 21
        ? "Good night"
        : h > 18
        ? "Good evening"
        : h > 12
        ? "Good afternoon"
        : h > 6
        ? "Good morning"
        : "Good night"
    }`;

    setTime(time);
    setMent(ment);
  };
  useEffect(() => {
    setInterval(tms, 1000);
    // setInterval(tictoc, 1000);
  });
  const { main } = useW();
  console.log(time);
  console.log("hi");

  return (
    <Frame src={main}>
      <Clock>{time}</Clock>
      <Greet>{initTime.ment}</Greet>
    </Frame>
  );
};
