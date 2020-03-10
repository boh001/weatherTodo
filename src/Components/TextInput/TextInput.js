import React, { forwardRef } from "react";
import { InputLabel, TextInput, RelativeBox } from "./TextInput.style";
export default forwardRef(
  (
    { event, placeholder, label, color, labelColor, placeColor, id, visible },
    ref
  ) => {
    console.log(typeof event);
    const none = e => {
      return false;
    };
    const action = event || none;
    return (
      <>
        <RelativeBox id={id} visible={visible}>
          <TextInput
            ref={ref}
            onKeyUp={e => action(e)}
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
