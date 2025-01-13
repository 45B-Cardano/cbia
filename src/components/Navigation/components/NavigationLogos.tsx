import React from "react";
import { styled } from "@mui/material";

import { DesktopLogo, MobileLogo, TabletLogo } from "../../Icons/Icons";

const NavigationLogos = () => {
  return (
    <>
      <DesktopLogoWrapper>
        <DesktopLogo />
      </DesktopLogoWrapper>
      <TabletLogoWrapper>
        <TabletLogo />
      </TabletLogoWrapper>
      <MobileLogoWrapper>
        <MobileLogo />
      </MobileLogoWrapper>
    </>
  );
};

const DesktopLogoWrapper = styled("div")(({ theme }) => ({
  "@media(max-width: 850px)": {
    display: "none",
  },
}));

const TabletLogoWrapper = styled("div")(({ theme }) => ({
  display: "none",

  "@media(max-width: 850px)": {
    display: "block",
  },

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MobileLogoWrapper = styled("div")(({ theme }) => ({
  display: "none",

  "@media(max-width: 600px)": {
    display: "block",
  },
}));

export default NavigationLogos;
