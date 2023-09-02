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
import { Heading, Paragraph } from "@/components/common";
import { o6 } from "@/assets";
import { WH } from "@/utils/screensize";

const SectionThreeCarousel = () => {
  const screenWidth = window.innerWidth;
  const SectionThreeCarousel = {
    ImageFrame: tw.div`relative`,
    Content: tw.div`flex items-center justify-center pb-20 absolute bottom-[0px] left-1/2 -translate-x-1/2 z-[999]`,
  };
  const { ImageFrame, Content } = SectionThreeCarousel;
  return (
    <div className="">
      <Swiper
        direction="horizontal"
        speed={3000}
        loop
        slidesPerView={WH(screenWidth)}
        spaceBetween={10}
        centeredSlides={false}
        grabCursor={true}
        autoplay={{
          delay: 1000,
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
              <ImageFrame>
                <Image
                  className="h-auto w-full rounded-sm align-middle"
                  src={o6}
                  alt=""
                  width={350}
                  height={350}
                />
                <Content className="">
                  <Paragraph className="relative z-1 text-[#09161d] after:bg-white after:h-[60px] after:w-[60px] after:rounded-sm after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45 after:z-[-1] after:transition-[0.35s]">
                    $32
                  </Paragraph>
                </Content>
              </ImageFrame>
              <div className="flex flex-col text-white items-center justify-center my-4">
                <Heading className="text-4xl font-medium">Prawn Fried</Heading>
                <Paragraph>
                  Its a long aggreement that someone will be distracted
                </Paragraph>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SectionThreeCarousel;
