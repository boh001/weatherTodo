import React, { useCallback } from "react";
import { Clock, Greet, Frame } from "./Clock.style";
import TextInput from "Components/TextInput/TextInput";
import { useW } from "store";
import { color } from "Components/Global/variable";

export default () => {
  const { time, greet } = useW();
  const { name, url } = JSON.parse(localStorage.getItem("user"));
  console.log("clock");
  const changeImg = useCallback(e => {
    console.log("hi");

    e.preventDefault();
    if (e.keyCode === 13) {
      const input = e.currentTarget;
      console.log(input.value);
      localStorage.setItem("user", JSON.stringify({ name, url: input.value }));
      input.value = "";
    }
  });
  return (
    <>
      <Frame src={url}>
        <Clock>{time}</Clock>
        <Greet>
          {greet}, {name}
        </Greet>
        <TextInput
          event={changeImg}
          id={"url"}
          placeholder={"Write your image-url"}
          color={"white"}
          label={"Image"}
          placeColor={"white"}
          labelColor={color.lightGreen}
          visible={"hidden"}
        />
      </Frame>
    </>
  );
};
