"use client";
import { Button, Heading, Paragraph } from "@/components/common";
import { PageWrapper } from "@/components/layout";
import { ShowCaseData } from "@/utils/data";
import Image from "next/image";
import * as React from "react";
import tw from "tailwind-styled-components";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { o1, o2, o3, o4 } from "@/assets";
import ShowCaseCarousel from "./ShowCaseCarousel";
import AOS from "aos";
import "aos/dist/aos.css";

const KiteRight = () => {
  return (
    <div className="w-[150px] md:w-[250px] h-auto p-4">
      <Image src={o2} alt="" width={250} height={250} />
    </div>
  );
};
const KiteLeft = () => {
  return (
    <div className="w-[150px] md:w-[250px] h-auto  p-4">
      <Image src={o3} alt="" width={250} height={250} />
    </div>
  );
};
const KiteTop = () => {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] md:w-[250px] h-[150px] md:h-[250px] border-b-16 border-yellow-500 border-solid">
      <Image src={o1} alt="" width={250} height={250} />
    </div>
  );
};

const KiteBottom = () => {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150px] md:w-[250px] h-[150px] md:h-[250px] border-t-16 border-red-500 border-solid">
      <Image src={o4} alt="" width={250} height={250} />
    </div>
  );
};

const KiteLayout = () => {
  return (
    <div className="flex justify-center items-center h-[300px] md:h-[500px]  w-full">
      <div className="relative h-full">
        <KiteTop />
        <div className="flex absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 ">
          <KiteLeft />
          <KiteRight />
        </div>
        <KiteBottom />
      </div>
    </div>
  );
};

const ShowCase = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const ShowCaseStyles = {
    Layout: tw.div`px-0 py-20 md:px-20 md:py-20 w-full`,
    Grid: tw.section`grid grid-cols-7 gap-x-5 pt-20`,
    Right: tw.div`col-span-7 md:col-span-4 sm:justify-center sm:items-center `,
    Left: tw.div`col-span-7 md:col-span-3`,
    Col: tw.div`h-[30vh] flex flex-col justify-center max-w-[40%] w-full gap-y-3`,
    Row: tw.div`grid grid-cols-4 gap-3 justify-center items-center py-4 md:py-0`,
  };
  const { Layout, Grid, Left, Right, Col, Row } = ShowCaseStyles;
  return (
    <>
      <PageWrapper classNames="bg-white">
        <Layout>
          {/* CAROUSEL COMPONENT */}
          <ShowCaseCarousel />
          <Grid>
            <Left data-aos="zoom-in-up" data-aos-duration="1000">
              <KiteLayout />
            </Left>
            <Right data-aos="zoom-in-down" data-aos-duration="1000">
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
              <Heading className="text-4xl my-4">
                Come to Our Restaurant, Ready Your Food.
              </Heading>
              <Paragraph className="leading-loose tracking-wide text-[#5e5e5e] text-lg">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Paragraph>
              {/*  */}
              <Col>
                {ShowCaseData.data.map(
                  ({ description, id, image, title }, _) => (
                    <>
                      <Row key={id}>
                        <div className="col-span-4 md:col-span-1 border border-[#bf9444] rounded-xl flex items-center justify-center p-2">
                          <Image src={image} alt="" width={50} height={50} />
                        </div>
                        <div className="col-span-4 md:col-span-3">
                          <Paragraph className="text-2xl font-medium">
                            {title}
                          </Paragraph>
                          <Paragraph>{description}</Paragraph>
                        </div>
                      </Row>
                    </>
                  )
                )}
              </Col>
              <Button className="flex items-center text-[#bf9444] px-6 py-4 gap-x-3 border border-[#bf9444] rounded-full">
                <BsArrowUpRightCircle />
                <Paragraph>Discover More</Paragraph>
              </Button>
            </Right>
          </Grid>
        </Layout>
      </PageWrapper>
    </>
  );
};

export default ShowCase;
