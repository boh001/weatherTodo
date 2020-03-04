import React, { useState, useEffect } from "react";
import { Clock, Greet, Frame } from "./Clock.css";
export default () => {
  const [time, setTime] = useState("");
  const tms = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const time = `${h < 10 ? `0${h}` : h} : ${m < 10 ? `0${m}` : m} : ${
      s < 10 ? `0${s}` : s
    }`;
    setTime(time);
  };
  useEffect(() => {
    setInterval(tms, 1000);
  });
  return (
    <Frame>
      <Clock>{time}</Clock>
      <Greet>Good afternoon</Greet>
    </Frame>
  );
};
