import React from "react";
import { styled, Typography } from "@mui/material";

import PrinciplesCard from "./PrinciplesCard";
import { principlesMock } from "../../../mocks/homeMocks";

const PrinciplesOfWork = () => {
  return (
    <OuterWrapper>
      <LineWrapper>
        <LineTitle variant="blockTitle" color="textColor.main">
          principles of work
        </LineTitle>
      </LineWrapper>
      <Wrapper>
        {principlesMock.map((elem) => (
          <PrinciplesCard key={elem.title} {...elem} />
        ))}
      </Wrapper>
    </OuterWrapper>
  );
};

const LineTitle = styled(Typography)({
  textTransform: "uppercase",
});

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  rowGap: "5px",
  columnGap: "35px",
  maxWidth: "1020px",
  marginRight: "390px",
  marginLeft: "auto",

  [theme.breakpoints.down("xl")]: {
    rowGap: "55px",
    columnGap: "35px",
    maxWidth: "1100px",
    marginRight: "75px",
  },

  "@media(max-width: 1300px)": {
    maxWidth: "800px",
    margin: "0 auto",

    "& > div": {
      width: "calc(50% - 18px)",
    },
  },

  "@media(max-width: 1000px)": {
    maxWidth: "700px",
    padding: "0 20px",
  },

  "@media(max-width: 768px)": {
    maxWidth: "500px",
    width: "100%",
    rowGap: "0",
  },

  "@media(max-width: 600px)": {
    maxWidth: "100%",

    gap: "40px",

    "& > div": {
      width: "100%",
    },
  },
}));

const OuterWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  paddingBottom: "146px",
  paddingTop: "130px",

  [theme.breakpoints.down("xl")]: {
    paddingTop: "100px",
  },

  "@media(max-width: 768px)": {
    paddingTop: "80px",
    paddingBottom: "128px",
  },

  "@media(max-width: 400px)": {
    paddingBottom: "100px",
  },
}));

const LineWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  position: "absolute",
  left: "15%",
  top: "0px",
  width: "20%",

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
  },

  "@media(max-width: 600px)": {
    left: "0",
    width: "170px",
    alignItems: "center",

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

export default PrinciplesOfWork;
