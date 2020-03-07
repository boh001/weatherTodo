import React from "react";
import { IntroFrame, IntroTheme, ThemeUl, UlSpan, UlLi } from "./Intro.style";
export default () => {
  return (
    <IntroFrame>
      <IntroTheme>WeatherTodo</IntroTheme>
      <ThemeUl>
        <UlSpan>Programming Language</UlSpan>
        <UlLi>Backend : NodeJS(Express)</UlLi>
        <UlLi>FrontEnd : ReactJS</UlLi>
      </ThemeUl>
      <ThemeUl>
        <UlSpan>Function</UlSpan>
        <UlLi>Upload Contents</UlLi>
        <UlLi>Like Button</UlLi>
        <UlLi>Find Friends</UlLi>
        <UlLi>Comment</UlLi>
        <UlLi>Realtime Chat(socket.io)</UlLi>
      </ThemeUl>
    </IntroFrame>
  );
};
