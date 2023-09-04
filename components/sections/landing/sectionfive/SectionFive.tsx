"use client";

import { o8 } from "@/assets";
import { Heading, Paragraph } from "@/components/common";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionFive = () => {
  React.useEffect(() => {
    AOS.init();
  });
  const SectionFiveStyles = {
    Layout: tw.section`w-full py-32`,
    Center: tw.div`flex flex-col text-white items-center justify-center gap-y-3 md:gap-y-0`,
    Grid: tw.div`grid grid-cols-6 gap-4 mt-10`,
    Card: tw.div`col-span-6 md:col-span-2`,
  };
  const { Layout, Center, Card, Grid } = SectionFiveStyles;
  return (
    <>
      <PageWrapper classNames="bg-white">
        <Layout>
          <Center>
            <div className="flex gap-x-2">
              <Image
                src={
                  "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                }
                alt=""
                width={20}
                height={20}
              />
              <Paragraph className="text-[#bf9444]">Gallery Stores</Paragraph>
              <Image
                src={
                  "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                }
                alt=""
                width={20}
                height={20}
              />
            </div>
            <Heading className="text-5xl md:text-6xl text-center md:text-start text-black">
              Restho New Item List
            </Heading>
          </Center>
          <Grid>
            {Array(3)
              .fill("")
              .map((_) => (
                <>
                  <Card data-aos="zoom-in-up" data-aos-duration="1000">
                    <Image
                      src={o8}
                      alt=""
                      width={1000}
                      height={1000}
                      className="transition-transform transform hover:scale-105 cursor-pointer overflow-hidden z-20"
                    />
                  </Card>
                </>
              ))}
          </Grid>
        </Layout>
      </PageWrapper>
    </>
  );
};

export default SectionFive;
