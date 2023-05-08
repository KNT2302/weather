import { FC, HTMLAttributes, forwardRef } from "react";

interface InputProps {}

const Input = forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>(
  ({ ...rest }, ref) => {
    return (
      <input
        type="text"
        {...rest}
        ref={ref}
        style={{
          outline: "none",
          padding: "0 1px",
          width: "100%",
          height: "100%",
        }}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
