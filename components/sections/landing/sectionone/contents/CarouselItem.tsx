import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tw from "tailwind-styled-components";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import Image from "next/image";
import { Button, Heading, Paragraph } from "@/components/common";
import KiteLayout from "@/components/layout/KiteLayout";
import { BsArrowUpRightCircle } from "react-icons/bs";

const CarouselItem = () => {
  const CarouselItem = {
    Grid: tw.div`grid grid-cols-4 gap-x-10 justify-center items-center z-[99]`,
    Left: tw.div`col-span-4 md:col-span-2 text-white flex flex-col gap-y-6 md:gap-y-12`,
    Right: tw.div`col-span-4 md:col-span-2 hidden md:block`,
  };
  const { Grid, Left, Right } = CarouselItem;
  return (
    <div className="">
      <Swiper
        direction="horizontal"
        speed={6000}
        loop
        slidesPerView={1}
        centeredSlides={false}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        scrollbar={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          enabled: false,
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[
          Keyboard,
          Scrollbar,
          Navigation,
          Pagination,
          Autoplay,
          Mousewheel,
        ]}
        className="mySwiper"
      >
        {Array(7)
          .fill("")
          .map((i) => (
            <SwiperSlide key={i} style={{ width: "100%" }}>
              <Grid>
                <Left>
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
                      Welcome to Restho
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
                  <Heading className="text-xl md:text-7xl leading-10 ">
                    Find Your Best Health and Tasty Food
                  </Heading>
                  <Paragraph className="text-base md:text-xl">
                    It is long extablished fact that a reader will be distracted
                    by the readable content of the page
                  </Paragraph>
                  <Button className="flex items-center text-[#bf9444] px-6 py-4 gap-x-3 border border-[#bf9444] rounded-full max-w-xs justify-center">
                    <BsArrowUpRightCircle />
                    <Paragraph>Discover More</Paragraph>
                  </Button>
                </Left>
                <Right>
                  <KiteLayout />
                </Right>
              </Grid>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CarouselItem;
