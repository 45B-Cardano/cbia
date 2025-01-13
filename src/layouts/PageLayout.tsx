import React, { FC } from "react";
import Navigation from "../components/Navigation/Navigation";
import { styled } from "@mui/material/styles";
import Footer from "../components/Footer/Footer";

interface Props {
  children: React.ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Line />
      <Navigation />
      {children}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  contain: "paint",
});

const Line = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: "15%",
  width: "1px",
  background: "rgba(0, 56, 255, 0.10)",
  height: "100%",

  [theme.breakpoints.down("xl")]: {
    left: "10%",
  },

  "@media(max-width: 600px)": {
    left: "unset",
    right: "26px",
    botton: "unset",
    background: "linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)",
    height: "280px",

    "&::after": {
      content: `''`,
      position: "absolute",
      right: "-1.5px",
      top: "280px",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      background: "#91ABFF",
    },
  },
}));

export default PageLayout;
