import React, { useState, useEffect } from "react";
import { Clock, Greet, Frame } from "./Clock.css";
import { useW } from "store";
export default () => {
  const [time, setTime] = useState("");
  const [initMent, setMent] = useState("");
  const tms = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const time = `${h < 10 ? `0${h}` : h} : ${m < 10 ? `0${m}` : m} : ${
      s < 10 ? `0${s}` : s
    }`;
    const ment = `${
      h > 24
        ? "Good night"
        : h > 18
        ? "Good evening"
        : h > 12
        ? "Good afternoon"
        : "Good morning"
    }`;
    setTime(time);
    setMent(ment);
  };
  useEffect(() => {
    setInterval(tms, 1000);
  });
  const { main } = useW();

  return (
    <Frame src={main}>
      <Clock>{time}</Clock>
      <Greet>{initMent}</Greet>
    </Frame>
  );
};
