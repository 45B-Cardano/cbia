import React from "react";
import { Typography, styled } from "@mui/material";

import { ArrowDownIcon } from "../../../components/Icons/Icons";
import { Parallax, useParallax } from "react-scroll-parallax";

const Header = () => {
  return (
    <>
      <Wrapper id="header">
        <CardanoWrapper>
          <Typography variant="cardanoText" color="textColor.light">
            Cardano
          </Typography>
          <CardanoIconWrapper>
            <img src="/images/home/CardanoLogoIcon.png" />
          </CardanoIconWrapper>
          <Typography variant="cardanoText" color="textColor.light">
            Blockchain Infrastructure Alliance
          </Typography>
        </CardanoWrapper>
        <TitleWrapper>
          <Title variant="h1" color="textColor.light">
            Building Better Together
          </Title>
          <Subtitle variant="homeSubtitle" color="textColor.light">
            Empowering developers to build Cardano applications
          </Subtitle>
        </TitleWrapper>
        <StyledCubeTop>
          <Parallax speed={40}>
            <img src="/images/home/cubeTop.png" />
          </Parallax>
        </StyledCubeTop>
        <StyledCubeBottom>
          <Parallax speed={10}>
            <img src="/images/home/cubeBottom.png" />
          </Parallax>
        </StyledCubeBottom>
        <StyledPlatonic>
          <Parallax speed={20} rotate={[0, 60]}>
            <img src="/images/home/platonic.png" />
          </Parallax>
        </StyledPlatonic>
      </Wrapper>
      <LeftTextWrapper>
        <ArrowDownIcon />
        <Typography variant="upText" color="textColor.light">
          EXPLORE more
        </Typography>
      </LeftTextWrapper>
    </>
  );
};

const CardanoIconWrapper = styled("div")({
  width: "17px",
  height: "16px",

  img: {
    width: "100%",
  },
});

const LeftTextWrapper = styled("div")(({ theme }) => ({
  opacity: "0.8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "13px",
  position: "absolute",
  textTransform: "uppercase",
  transform: "rotate(-90deg)",
  top: "740px",
  left: "10%",

  [theme.breakpoints.down("xl")]: {
    left: "5%",
  },

  "@media(max-width: 1200px)": {
    left: "4%",
  },

  "@media(max-width: 1000px)": {
    left: "2%",
  },

  "@media(max-width: 768px)": {
    left: "1%",
    top: "431px",
  },

  "@media(max-width: 600px)": {
    left: "unset",
    right: "-34px",
    top: "350px",
  },

  svg: {
    transform: "rotate(90deg)",
  },
}));

const StyledCubeTop = styled("div")(({ theme }) => ({
  display: "none",
  maxWidth: "276px",
  position: "absolute",
  top: "-128px",
  left: "342px",
  zIndex: "-1",

  [theme.breakpoints.down("xl")]: {
    display: "block",
  },

  "& img": {
    maxWidth: "100%",
  },

  "@media(max-width: 950px)": {
    maxWidth: "160px",
    top: "10px",
    left: "230px",
  },

  "@media(max-width: 768px)": {
    maxWidth: "133px",
    top: "10px",
    left: "178px",
  },

  "@media(max-width: 500px)": {
    display: "none",
  },
}));

const StyledCubeBottom = styled("div")(({ theme }) => ({
  maxWidth: "300px",
  position: "absolute",
  top: "430px",
  left: "170px",
  zIndex: "-1",

  "& img": {
    maxWidth: "100%",
  },

  [theme.breakpoints.down("xl")]: {
    maxWidth: "290px",
    position: "absolute",
    top: "402px",
    left: "70px",
    zIndex: "-1",
  },

  "@media(max-width: 950px)": {
    left: "-65px",
  },

  "@media(max-width: 768px)": {
    top: "310px",
    left: "-65px",
  },

  "@media(max-width: 500px)": {
    display: "none",
  },
}));

const StyledPlatonic = styled("div")({
  position: "absolute",
  top: "-130px",
  right: "0px",
  maxWidth: "840px",
  zIndex: "-1",

  "& img": {
    maxWidth: "100%",
  },

  "@media(max-width: 950px)": {
    maxWidth: "550px",
    top: "-80px",
    right: "-30px",
  },

  "@media(max-width: 768px)": {
    maxWidth: "450px",
    top: "-56px",
    right: "-30px",
  },

  "@media(max-width: 500px)": {
    maxWidth: "360px",
    top: "36px",
    right: "-105px",
  },
});

const TitleWrapper = styled("div")(({ theme }) => ({
  maxWidth: "960px",

  [theme.breakpoints.down("xl")]: {
    maxWidth: "930px",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  display: "block",
  marginTop: "-80px",
  maxWidth: "355px",
  textAlign: "right",
  opacity: "0.8",
  marginLeft: "auto",

  [theme.breakpoints.down("xl")]: {
    marginTop: "-60px",
  },

  "@media(max-width: 950px)": {
    maxWidth: "240px",
    textAlign: "left",
    marginRight: "-100px",
  },

  [theme.breakpoints.down("md")]: {
    maxWidth: "160px",
    marginTop: "-54px",
    marginRight: "30px",
  },

  "@media(max-width: 720px)": {
    textAlign: "left",
    margin: "0",
    marginTop: "25px",
    maxWidth: "215px",
  },
}));

const Title = styled(Typography)({});

const CardanoWrapper = styled("div")({
  display: "flex",
  gap: "5px",
  alignItems: "center",
});

const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  marginTop: "120px",
  width: "100%",
  padding: "0 310px",
  paddingBottom: "565px",
  gap: "32px",

  [theme.breakpoints.down("xl")]: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: "0 172px",
    paddingBottom: "615px",
  },

  [theme.breakpoints.down("lg")]: {
    padding: "0 120px",
    paddingBottom: "615px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "0 98px",
    marginTop: "100px",
    paddingBottom: "320px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0 20px",
    marginTop: "30px",
    paddingBottom: "233px",
    gap: "10px",
  },
}));

export default Header;
