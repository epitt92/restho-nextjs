"use client";

import { o7 } from "@/assets";
import { Button, Heading, Paragraph } from "@/components/common";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import tw from "tailwind-styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionFour = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const SectionFourStyles = {
    Layout: tw.section`w-full py-10`,
    Justify: tw.div`flex flex-col md:flex-row items-center justify-center gap-y-4 md:justify-between`,
    Grid: tw.ul`grid grid-cols-6 gap-8 mt-10`,
    Card: tw.li`col-span-6 md:col-span-2 group`,
    CardLayout: tw.div`w-full border border-slate-100 rounded-2xl relative`,
    Content: tw.div`p-12 flex flex-col items-center justify-center gap-y-2 relative`,
  };
  const { Layout, Justify, Card, CardLayout, Grid, Content } =
    SectionFourStyles;
  return (
    <PageWrapper classNames="bg-white">
      <Layout>
        <Justify>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <div className="flex gap-x-2">
              <Image
                src={
                  "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                }
                alt=""
                width={20}
                height={20}
              />
              <Paragraph className="text-[#bf9444]">About to Restho</Paragraph>
              <Image
                src={
                  "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                }
                alt=""
                width={20}
                height={20}
              />
            </div>
            <Heading className="text-5xl md:text-6xl font-medium text-center md:text-start">
              Find Your Food Item
            </Heading>
          </div>

          <Button className="flex items-center text-[#bf9444] px-6 py-4 gap-x-3 border border-[#bf9444] rounded-full">
            <BsArrowUpRightCircle />
            <Paragraph>Discover More</Paragraph>
          </Button>
        </Justify>
        {/*  */}
        <Grid>
          {Array(6)
            .fill("")
            .map((_) => (
              <>
                <Card data-aos="zoom-in-up" data-aos-duration="1000">
                  <CardLayout>
                    <Image
                      className="w-full h-auto object-cover align-middle rounded-t-2xl"
                      src={o7}
                      alt=""
                      width={500}
                      height={500}
                    />
                    <Content>
                      <Heading className="text-xl md:text-4xl font-medium">
                        Prawn with Noodles
                      </Heading>
                      <Paragraph className="text-sm md:text-xl leading-loose text-center">
                        It is a long established fact that a reader will be
                        distracted.
                      </Paragraph>
                      <div className="px-12 py-2 translate-x-[-50%] bg-white absolute top-[-10px] left-1/2 flex justify-center items-center shadow-sm border border-slate-100 rounded-full">
                        <Paragraph>$45</Paragraph>
                      </div>
                    </Content>
                    {/*  */}
                    <div className="absolute top-5 right-0 bg-[#ffffffcc] border px-5 py-3 rounded-tl-full rounded-bl-full flex items-center justify-center shadow-lg">
                      <Paragraph>Launch</Paragraph>
                    </div>
                  </CardLayout>
                </Card>
              </>
            ))}
        </Grid>
      </Layout>
    </PageWrapper>
  );
};

export default SectionFour;
