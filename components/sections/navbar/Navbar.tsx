"use client";

import React from "react";
import tw from "tailwind-styled-components";
import NavbarTop from "./contents/NavbarTop";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import { Button, Paragraph } from "@/components/common";
import { throttle } from "@/hooks/throttle";
import cx from "classnames";
import { NavItems } from "@/utils/data";
import { BsArrowDownShort } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const NavListDesktop = () => {
  const Styles = {
    Layout: tw.ul`hidden md:flex items-center gap-x-3`,
    NavItemGroup: tw.li`group relative px-3 py-2`,
    NavItem: tw.div`flex items-center text-2xl font-medium `,
  };
  const { Layout, NavItem, NavItemGroup } = Styles;
  return (
    <>
      <Layout>
        {NavItems.data.map(
          ({ id, link, title, collections, icon, isDropdown }, _) => (
            <>
              <NavItemGroup>
                <NavItem key={id}>
                  <Link href={link}>{title}</Link>
                  {icon}
                </NavItem>
                {isDropdown && (
                  <div className="absolute top-10 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-1000 ease-in-out group-hover:transform min-w-[16rem] lg:min-w-[300px] transform z-[999]">
                    <div className="relative top-6 p-6 bg-white rounded-sm shadow-xl w-full">
                      <div className="w-5 h-5 bg-[#bf9444] transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                      {/*  */}
                      <div className="relative z-10">
                        <div>
                          <ul className="mt-3 text-[15px] flex flex-col gap-y-4">
                            {collections?.map(({ id, name }, _) => (
                              <>
                                <li
                                  key={id}
                                  className="cursor-pointer transition duration-500 hover:text-[#bf9444] "
                                >
                                  {name}
                                </li>
                              </>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </NavItemGroup>
            </>
          )
        )}
      </Layout>
    </>
  );
};

const Navbar = () => {
  const ButtonRef = React.useRef<HTMLButtonElement>();
  const [isNavVisible, setIsNavVisible] = React.useState(false);
  const navbarRef = React.useRef<{ clientHeight: any }>({ clientHeight: "" });

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef?.current?.clientHeight;
      const scrollY = window.scrollY;
      if (scrollY > navbarHeight!) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };
    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);
  const otherStyles: React.CSSProperties = {
    boxShadow: "5px 3px 40px hsla(0,0%,39%,.1)",
  };
  const NavbarStyles = {
    Nav: tw.nav`flex justify-between items-center p-8 rounded-full bg-[#f8f9fa] max-w-[90%] w-full z-[999] transition ease-in duration-150 delay-75 relative shadow-md`,
  };
  const { Nav } = NavbarStyles;
  return (
    <>
      <NavbarTop />
      {/* <PageWrapper classNames="max-w-full mx-0"> */}
      <div className="flex w-full justify-center items-center">
        <Nav
          className={cx(isNavVisible && "top-0 fixed w-full")}
          style={otherStyles}
        >
          <Image
            src="https://restho-nextjs.vercel.app/assets/images/header2-logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="cursor-pointer w-[10vh] md:w-[30vh]"
          />
          {/*  */}
          <NavListDesktop />
          {/*  */}
          <AiOutlineMenu className="block md:hidden cursor-pointer" size={16} />
          <Button className="bg-[#bf9444] hidden md:block px-10 py-4 rounded-full text-[#ffffffcc]">
            Find Reservation
          </Button>
        </Nav>
      </div>

      {/* </PageWrapper> */}
    </>
  );
};

export default Navbar;
