import tw from "tailwind-styled-components";
import cx from "classnames";
import * as React from "react";
interface PageWrapperProps {
  children: React.ReactNode;
  classNames?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, classNames }) => {
  const PageWrapperStyles = {
    Layout: tw.div`flex px-2 md:px-24 max-w-full md:max-w-[1440px] xl:max-w-full w-full mx-auto relative z-[99]`,
  };
  const { Layout } = PageWrapperStyles;
  return (
    <>
      <Layout className={cx(classNames)}>{children}</Layout>
    </>
  );
};

export default PageWrapper;
