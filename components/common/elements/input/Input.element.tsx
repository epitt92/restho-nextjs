import { forwardRef, InputHTMLAttributes } from "react";
import { ClassType } from "@/types/global";
import cx from "classnames";

type InputProps = ClassType & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className } = props;
  return (
    <input
      ref={ref}
      {...props}
      className={cx(className, "w-full font-lato placeholder:font-lato")}
    />
  );
});

Input.displayName = "Input";

export default Input;
