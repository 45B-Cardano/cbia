import React from "react";
import { styled, Typography } from "@mui/material";

const Partners = () => {
  return (
    <OuterWrapper id="partners">
      <LineWrapper>
        <LineTitle variant="blockTitle" color="textColor.main">
          partners
        </LineTitle>
      </LineWrapper>
      <Wrapper>
        <StyledImg src="/images/home/CardanoBigLogo.png" />
        <StyledImg src="/images/home/EmugroLogo.png" />
        <StyledImg src="/images/home/InputLogo.png" />
      </Wrapper>
    </OuterWrapper>
  );
};

const StyledImg = styled("img")({});

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "80px",
  maxWidth: "900px",
  width: "100%",
  marginLeft: "auto",
  marginRight: "460px",
  marginTop: "115px",

  [theme.breakpoints.down("xl")]: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "80px",
    maxWidth: "900px",
    width: "100%",
    marginLeft: "auto",
    marginRight: "100px",
  },

  "@media(max-width: 1300px)": {
    justifyContent: "end",

    img: {
      width: "200px",
    },
  },

  "@media(max-width: 1100px)": {
    gap: "40px",
    maxWidth: "530px",

    img: {
      width: "150px",
    },
  },

  "@media(max-width: 900px)": {
    marginTop: "0",
    marginRight: "35%",
    maxWidth: "150px",
    flexDirection: "column",
    gap: "22px",
  },

  "@media(max-width: 500px)": {
    marginRight: "100px",
  },

  "@media(max-width: 400px)": {
    marginRight: "80px",
  },
}));

const OuterWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  paddingBottom: "385px",

  [theme.breakpoints.down("xl")]: {
    paddingBottom: "310px",
  },

  "@media(max-width: 768px)": {
    paddingBottom: "200px",
  },

  "@media(max-width: 400px)": {
    paddingBottom: "70px",
  },
}));

const LineTitle = styled(Typography)({
  textTransform: "uppercase",
});

const LineWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  position: "absolute",
  left: "15%",
  top: "19px",
  width: "350px",

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

  [theme.breakpoints.down("xl")]: {
    left: "10%",
    width: "300px",
  },

  "@media(max-width: 1400px)": {
    width: "150px",
  },

  "@media(max-width: 768px)": {
    top: "11px",
  },

  "@media(max-width: 600px)": {
    left: "0",
    width: "100px",
    alignItems: "center",
    top: "0px",

    "&::before": {
      content: `''`,
      position: "absolute",
      right: "-2.5px",
      left: "unset",
      bottom: "-2.5px",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      background: "#91ABFF",
    },

    "&:after": {
      content: `''`,
      height: "1px",
      width: "100%",
      background: "rgba(0, 56, 255, 0.10)",
      marginTop: "5px",
    },
  },
}));

export default Partners;
