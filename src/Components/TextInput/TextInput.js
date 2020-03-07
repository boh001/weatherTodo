import React from "react";
import { InputLabel, TextInput, RelativeBox } from "./TextInput.style";
export default ({ placeholder, label }) => {
  return (
    <>
      <RelativeBox>
        <TextInput placeholder={placeholder} />
        <InputLabel>{label}</InputLabel>
      </RelativeBox>
    </>
  );
};
