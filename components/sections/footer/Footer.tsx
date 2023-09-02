"use client";

import { Heading, Paragraph } from "@/components/common";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const FooterStyles = {
    Layout: tw.footer`w-full py-10`,
    Grid: tw.div`grid grid-cols-6 gap-6 md:gap-x-40 justify-center items-center`,
    GridLayout: tw.div`col-span-6 md:col-span-2 justify-center items-center`,
  };
  const { Layout, Grid, GridLayout } = FooterStyles;
  return (
    <>
      <PageWrapper classNames="footer">
        <Layout>
          <Grid>
            <GridLayout>
              <div className="flex flex-col text-white gap-y-6">
                <Heading className="mt-6 text-2xl font-medium">
                  Our Facilities
                </Heading>
                {Array(5)
                  .fill("")
                  .map((_) => (
                    <>
                      <div
                        key={_}
                        className="flex items-center gap-3 md:gap-x-20 text-sm md:text-base"
                      >
                        <div className="group relative">
                          <p className="group-hover:opacity-0 transition-opacity duration-100 cursor-pointer">
                            Menu Item
                          </p>
                          <p className="hidden whitespace-nowrap text-[#bf9444] group-hover:flex items-center gap-x-2 absolute left-0 top-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-2000 ease-in-out cursor-pointer">
                            <div className="w-10 h-[2px] bg-[#bf9444]" />
                            <span>Menu Item</span>
                          </p>
                        </div>
                        <div className="group relative">
                          <p className="group-hover:opacity-0 transition-opacity duration-100 cursor-pointer">
                            Popular Item
                          </p>
                          <p className="hidden whitespace-nowrap text-[#bf9444] group-hover:flex items-center gap-x-2 absolute left-0 top-0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-2000 ease-in-out cursor-pointer">
                            <div className="w-10 h-[2px] bg-[#bf9444]" />
                            <span>Popular Item</span>
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </GridLayout>
            <GridLayout>
              <div className="w-[250px] md:w-[300px] h-[250px] md:h-[300px] flex relative justify-center items-center border border-[#bf9444] rounded-full">
                <div className="flex flex-col items-center justify-center gap-y-4">
                  <Image
                    src="https://restho-nextjs.vercel.app/assets/images/header1-logo.svg"
                    alt="logo"
                    width={150}
                    height={150}
                    className="w-full max-w-full h-auto"
                  />
                  <Paragraph className="text-white text-base md:text-xl tracking-wider">
                    Estimated . 2022
                  </Paragraph>
                  <div className="flex gap-x-2">
                    <Image
                      src={
                        "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                      }
                      alt=""
                      width={20}
                      height={20}
                    />
                    <Paragraph className="text-[#bf9444]">
                      About to Restho
                    </Paragraph>
                    <Image
                      src={
                        "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
                      }
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  {/*  */}
                  <div className="flex items-center justify-center gap-x-2">
                    <Link
                      href=""
                      className="w-10 h-10 border hover:bg-[#bf9444] transition duration-150 border-[#bf9444] rounded-full flex justify-center items-center text-white"
                    >
                      <FaFacebookF size={14} />
                    </Link>
                    <Link
                      href=""
                      className="w-10 h-10 border hover:bg-[#bf9444] transition duration-150 border-[#bf9444] rounded-full flex justify-center items-center text-white"
                    >
                      <AiOutlineInstagram size={14} />
                    </Link>
                    <Link
                      href=""
                      className="w-10 h-10 border hover:bg-[#bf9444] transition duration-150 border-[#bf9444] rounded-full flex justify-center items-center text-white"
                    >
                      <AiOutlineTwitter size={14} />
                    </Link>
                    <Link
                      href=""
                      className="w-10 h-10 border hover:bg-[#bf9444] transition duration-150 border-[#bf9444] rounded-full flex justify-center items-center text-white"
                    >
                      <BiLogoLinkedin size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </GridLayout>
            <GridLayout>
              <div className="flex flex-col text-white gap-y-4">
                <Heading className="mt-6 text-2xl font-medium">
                  Address Info{" "}
                </Heading>
                {Array(5)
                  .fill("")
                  .map((_) => (
                    <>
                      <div
                        key={_}
                        className="flex items-center gap-3 md:gap-x-5 text-sm md:text-base"
                      >
                        <Paragraph>Phone </Paragraph>
                        <Paragraph className="text-white hover:text-[#bf9444] transition duration-100 cursor-pointer">
                          +8801776766767
                        </Paragraph>
                      </div>
                    </>
                  ))}
              </div>
            </GridLayout>
          </Grid>
        </Layout>
      </PageWrapper>
    </>
  );
};

export default Footer;
