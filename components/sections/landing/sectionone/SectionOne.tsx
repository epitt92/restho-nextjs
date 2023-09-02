"use client";

import { v1, v2, v3 } from "@/assets";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import CarouselItem from "./contents/CarouselItem";

const SectionOne = () => {
  const SectionOneStyles = {
    Layout: tw.section`py-20 w-full`,
  };
  const { Layout } = SectionOneStyles;
  return (
    <>
      <PageWrapper classNames="banner-section2">
        <div>
          <Image
            src={v1}
            alt=""
            width={200}
            height={200}
            className="absolute top-1/2 -translate-x-1/2 left-0"
          />
          <Image
            src={v2}
            alt=""
            width={200}
            height={200}
            className="absolute right-[25%] top-[45%] animate-up-down"
          />
          <Image
            src={v3}
            alt=""
            width={200}
            height={200}
            className="absolute left-[35%] bottom-[20%] animate-up-down"
          />
          <Image
            src={v2}
            alt=""
            width={200}
            height={200}
            className="absolute right-[10%] top-[20%] animate-up-down-xx"
          />
        </div>
        <Layout>
          <CarouselItem />
        </Layout>
      </PageWrapper>
    </>
  );
};

export default SectionOne;
