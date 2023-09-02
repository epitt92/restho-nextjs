import { forwardRef, HTMLProps } from "react";
import cx from "classnames";
import { ClassType } from "@/types/global";

type ParagraphProps = ClassType & HTMLProps<HTMLParagraphElement>;

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props, ref) => {
    const { className } = props;
    return (
      <p ref={ref} {...props} className={cx(className, "cursor-default")} />
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
