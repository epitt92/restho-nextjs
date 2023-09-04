"use client";

import { o10 } from "@/assets";
import { Button, Heading, Paragraph } from "@/components/common";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionEight = () => {
  React.useEffect(() => {
    AOS.init();
  });
  const SectionEightStyles = {
    Layout: tw.div`w-full py-10`,
    Center: tw.div`flex flex-col text-white items-center justify-center`,
    Grid: tw.div`grid grid-cols-6 gap-x-16 gap-y-4`,
    Card: tw.li`col-span-6 md:col-span-2 group`,
    CardLayout: tw.div`w-full`,
    ImageLayout: tw.div`relative w-full px-4 md:px-12 z-40`,
  };
  const { Layout, Center, Card, CardLayout, Grid, ImageLayout } =
    SectionEightStyles;
  return (
    <>
      <PageWrapper classNames="bg-white px-10">
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
              <Paragraph className="text-[#bf9444]">Our Blog</Paragraph>
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
              Our Latest Blog
            </Heading>
          </Center>
          {/*  */}
          <Grid>
            {Array(6)
              .fill("")
              .map((_) => (
                <>
                  <Card data-aos="zoom-out-down" data-aos-duration="1000">
                    <CardLayout>
                      <ImageLayout>
                        <div className="h-20 w-20 flex items-center justify-center bg-white rounded-lg absolute top-4 right-8 md:right-16 transition duration-300">
                          <a
                            href="#"
                            className="w-full flex flex-col justify-center items-center h-full rounded-lg"
                          >
                            <Heading className="text-[#bf9444] text-xl">
                              18
                            </Heading>
                            <Paragraph>Aug</Paragraph>
                          </a>
                        </div>

                        <Image
                          src={o10}
                          alt=""
                          width={1000}
                          height={1000}
                          className="overflow-clip-margin-content overflow-clip max-w-full w-full h-auto rounded-md"
                        />
                      </ImageLayout>
                      <Center className="p-20 rounded-xl border border-slate-100 gap-y-6 relative -mt-16">
                        <Paragraph className="group flex items-center gap-x-3 transition duration-200 text-[#5e5e5e]">
                          <div className="w-10 h-[2px] bg-[#5e5e5e] hover:bg-[#bf9444]" />
                          <span className="hover:text-[#bf9444]">
                            By Clone Watson
                          </span>
                        </Paragraph>
                        <Paragraph className="text-lg md:text-3xl text-center text-black">
                          To Make Good Health Take Nutrition Food.
                        </Paragraph>
                        <Button className="flex items-center text-[#bf9444] px-6 py-4 gap-x-3 border border-[#bf9444] rounded-full">
                          {/* <BsArrowUpRightCircle /> */}
                          <Paragraph>Read More</Paragraph>
                        </Button>
                      </Center>
                    </CardLayout>
                  </Card>
                </>
              ))}
          </Grid>
        </Layout>
      </PageWrapper>
    </>
  );
};

export default SectionEight;
