import React, { forwardRef } from "react";
import { InputLabel, TextInput, RelativeBox } from "./TextInput.style";
export default forwardRef(
  ({ placeholder, label, color, labelColor, placeColor }, ref) => {
    return (
      <>
        <RelativeBox>
          <TextInput
            ref={ref}
            placeholder={placeholder}
            color={color}
            placeColor={placeColor}
          />
          <InputLabel color={labelColor}>{label}</InputLabel>
        </RelativeBox>
      </>
    );
  }
);
