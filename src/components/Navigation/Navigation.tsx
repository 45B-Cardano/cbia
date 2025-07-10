import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";

import NavigationLogos from "./components/NavigationLogos";
import NavigationLinks from "./components/NavigationLinks";
import NavigationMenu from "./components/NavigationMenu";

const Navigation = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper scrollHeight={scrollHeight}>
      <Left className="logos">
        <NavigationLogos />
      </Left>
      <Right>
        <NavigationLinks />
        <NavigationMenu />
      </Right>
    </Wrapper>
  );
};

const Right = styled("div")({
  display: "flex",
});

const Left = styled("div")({});

const Wrapper = styled("div")<{ scrollHeight: number }>(({ scrollHeight, theme }) => ({
  position: "sticky",
  top: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "40px 200px 40px 180px",
  zIndex: 1000000000,
  // background: "rgba(255, 255, 255, 0.1)",
  background: `rgba(255, 255, 255, ${scrollHeight > 1100 ? 0.95 : 0.1})`,

  [theme.breakpoints.down("xl")]: {
    padding: "33px 60px 33px 60px",
  },

  "& .logos path": {
    transition: ".3s linear",
    fill: scrollHeight > 1100 ? "black" : "white",
  },

  "& .menuIcon path": {
    transition: ".3s linear",
    stroke: scrollHeight > 1100 ? "black" : "white",
  },

  "& .link": {
    transition: ".3s linear",
    color: scrollHeight > 1100 ? "black" : "white",
  },

  "@media(max-width: 900px)": {
    padding: "25px 40px 25px 40px",
  },

  "@media(max-width: 600px)": {
    padding: "17px 24px 17px 24px",
  },
}));

export default Navigation;
