import { PagesLayout } from "@/components/layout";
import { HomeScreen } from "@/components/screens";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <PagesLayout>
        <HomeScreen />
      </PagesLayout>
    </>
  );
};

export default LandingPage;
