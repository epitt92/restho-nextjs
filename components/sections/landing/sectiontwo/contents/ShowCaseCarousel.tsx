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
import { o5 } from "@/assets";
import { WH, WHSpace } from "@/utils/screensize";

const ShowCaseCarousel = () => {
  const screenWidth = window.innerWidth;
  const ShowCaseCarouselStyles = {
    Flex: tw.div`flex items-center justify-center`,
    ImageLayout: tw.div`z-[99]`,
    ContentLayout: tw.div`max-w-[270px] w-full border border-gray-100 rounded-lg p-[20px_15px_20px_110px] ml-[-90px] relative z-10`,
  };
  const { ContentLayout, ImageLayout, Flex } = ShowCaseCarouselStyles;
  return (
    <div className="">
      <Swiper
        direction="horizontal"
        speed={3000}
        loop
        slidesPerView={WH(screenWidth)}
        spaceBetween={WHSpace(screenWidth)}
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
              <Flex>
                <ImageLayout>
                  <Image
                    src={o5}
                    alt=""
                    width={200}
                    height={200}
                    className="w-[16vh] md:w-full animate-spin duration-1000 h-auto"
                  />
                </ImageLayout>
                <ContentLayout>
                  <Heading className="text-lg font-medium">Vegeterian</Heading>
                  <Paragraph className="leading-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, delectus.
                  </Paragraph>
                </ContentLayout>
              </Flex>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ShowCaseCarousel;
