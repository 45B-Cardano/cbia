import React from "react";
import { styled, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

const OurMission = () => {
  return (
    <OuterWrapper id="our-mission">
      <LineWrapper />
      <Platonic1>
        <Parallax speed={30}>
          <img src="/images/home/Platonic1.png" />
        </Parallax>
      </Platonic1>
      <Platonic2>
        <Parallax speed={30}>
          <img src="/images/home/Platonic2.png" />
        </Parallax>
      </Platonic2>
      <Platonic3>
        <Parallax speed={30}>
          <img src="/images/home/Platonic3.png" />
        </Parallax>
      </Platonic3>
      <Wrapper>
        <TopTitle variant="blockTitle" color="textColor.dark">
          our mission
        </TopTitle>
        <Title variant="cardTitle" color="textColor.dark">
          Foster the growth and maturation <br />
          of the Cardano developer ecosystem
        </Title>
        <Subtitle variant="subtitle1" color="textColor.main">
          Our mission is to empower developers to build UTxO-based applications with confidence and help bring in the
          next billion users to Cardano. CBIA is an organization for developers, by developers.
        </Subtitle>
      </Wrapper>
    </OuterWrapper>
  );
};

const Subtitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    marginTop: "22px",
    maxWidth: "650px",
  },
}));

const Platonic1 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "-18px",
  left: "272px",
  width: "560px",
  zIndex: "-1",

  [theme.breakpoints.down("xl")]: {
    top: "-75px",
    left: "95px",
  },

  "& img": {
    width: "100%",
  },

  "@media(max-width: 768px)": {
    top: "-160px",
    left: "170px",
    width: "350px",
    // transform: "rotate(91deg)",
  },

  "@media(max-width: 600px)": {
    top: "-111px",
    left: "107px",
    width: "209px",
    // transform: "rotate(278deg)",
  },
}));

const Platonic2 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "300px",
  left: "179px",
  width: "233px",

  [theme.breakpoints.down("xl")]: {
    left: "0",
  },

  "& img": {
    width: "100%",
  },

  "@media(max-width: 768px)": {
    top: "-50px",
    left: "26px",
    width: "150px",
    // transform: "rotate(228deg)",
  },

  "@media(max-width: 600px)": {
    top: "-56px",
    left: "13px",
    width: "100px",
    // transform: "rotate(228deg)",
  },
}));

const Platonic3 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "465px",
  left: "50px",
  width: "220px",

  [theme.breakpoints.down("xl")]: {
    top: "480px",
    left: "-110px",
  },

  "& img": {
    width: "100%",
  },

  "@media(max-width: 768px)": {
    top: "80px",
    left: "0",
    width: "90px",
  },

  "@media(max-width: 600px)": {
    top: "17px",
    left: "0",
    width: "61px",
  },
}));

const OuterWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  paddingBottom: "200px",

  [theme.breakpoints.down("xl")]: {
    paddingBottom: "160px",
  },

  "@media(max-width: 768px)": {
    paddingBottom: "120px",
  },

  "@media(max-width: 400px)": {
    paddingBottom: "100px",
  },
}));

const TopTitle = styled(Typography)({
  textTransform: "uppercase",
});

const LineWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  position: "absolute",
  left: "15%",
  top: "75px",
  width: "15%",

  [theme.breakpoints.down("xl")]: {
    left: "10%",
  },

  "&:after": {
    content: `''`,
    height: "1px",
    width: "100%",
    background: "rgba(0, 56, 255, 0.10)",
    marginTop: "10px",
  },

  "&:before": {
    content: `''`,
    position: "absolute",
    left: "-2.5px",
    bottom: "-2.5px",
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: "#91ABFF",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    marginTop: "5px",
  },
  [theme.breakpoints.down("lg")]: {
    br: {
      display: "none",
    },
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  padding: "56px 64px 56px 64px",
  borderRadius: "45px",
  border: "5px solid rgba(255, 255, 255, 0.30)",
  background: "rgba(255, 255, 255, 0.75)",
  boxShadow:
    "0px 0px 0px 0px rgba(37, 58, 106, 0.04), 21px 24px 71px 0px rgba(37, 58, 106, 0.04), 85px 96px 128px 0px rgba(37, 58, 106, 0.03), 191px 216px 173px 0px rgba(37, 58, 106, 0.02), 340px 384px 205px 0px rgba(37, 58, 106, 0.01), 531px 600px 224px 0px rgba(37, 58, 106, 0.00)",
  backdropFilter: "blur(37.5px)",
  maxWidth: "922px",
  marginRight: "507px",
  marginLeft: "auto",

  [theme.breakpoints.down("xl")]: {
    padding: "57px 64px 65px 59px",
    maxWidth: "930px",
    marginRight: "71px",
    gap: "25px",
  },

  "@media(max-width: 1100px)": {
    maxWidth: "100%",
    margin: "0 40px",
  },

  "@media(max-width: 768px)": {
    padding: "56px 78px 65px 58px",
  },

  "@media(max-width: 600px)": {
    margin: "0 20px",
    padding: "31px 25px 42px 25px",
    borderRadius: "25px",
    gap: "10px",
  },
}));

export default OurMission;
