import { forwardRef, ButtonHTMLAttributes } from "react";
import { ClassType } from "@/types/global";
import cx from "classnames";

type ButtonProps = ClassType & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className } = props;
  return <button ref={ref} {...props} className={cx(className, "font-lato")} />;
});

Button.displayName = "Button";

export default Button;
