import React from "react";
import { InputLabel, TextInput } from "./TextInput.style";
export default ({ placeholder, label }) => {
  return (
    <>
      <TextInput placeholder={placeholder} />
      <InputLabel>{label}</InputLabel>
    </>
  );
};
