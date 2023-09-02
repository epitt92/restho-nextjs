import { Paragraph } from "@/components/common";
import PageWrapper from "@/components/layout/PageWrapper";
import React from "react";
import tw from "tailwind-styled-components";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
const NavbarTop = () => {
  const NavbarTopStyles = {
    Layout: tw.div`flex justify-between px-20 w-full py-5`,
    Flex: tw.div`flex items-center text-xl font-medium gap-x-2 text-[#f8f9fa]`,
  };
  const { Layout, Flex } = NavbarTopStyles;
  return (
    <>
      <PageWrapper>
        <Layout>
          <Flex>
            <Paragraph className="text-[#ffc107]">Opening Hour:</Paragraph>
            <Paragraph>9 am to 10 pm</Paragraph>
          </Flex>
          <Flex className="gap-x-12">
            <Flex>
              <HiOutlineMail color="#ffc107" />
              <Paragraph>info@example</Paragraph>
            </Flex>
            <Flex>
              <HiOutlineLocationMarker className="text-[#ffc107]" />
              <Paragraph>Road-01, Block-B, West London City</Paragraph>
            </Flex>
          </Flex>
        </Layout>
      </PageWrapper>
    </>
  );
};

export default NavbarTop;
