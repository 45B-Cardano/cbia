import React from "react";
import { styled } from "@mui/material";

import PageLayout from "../../layouts/PageLayout";
import Header from "./components/Header";
import WhoWeAre from "./components/WhoWeAre";
import OurMission from "./components/OurMission";
import PrinciplesOfWork from "./components/PrinciplesOfWork";
import Members from "./components/Members";
import Partners from "./components/Partners";
import { HeroBgDesktop } from "../../components/Icons/Icons";

const MainPage = () => {
  return (
    <PageLayout>
      <Header />
      <WhoWeAre />
      <OurMission />
      <PrinciplesOfWork />
      <Members />
      <Partners />
      <HeroBgWrapper>
        <HeroBgDesktop />
      </HeroBgWrapper>
    </PageLayout>
  );
};

const HeroBgWrapper = styled("div")({
  overflow: "hidden",
  position: "absolute",
  top: 0,
  left: -200,
  right: -200,
  zIndex: -10,

  "@media(max-width: 768px)": {
    left: -1390,
    right: 0,
    top: -750,
  },
});

export default MainPage;
