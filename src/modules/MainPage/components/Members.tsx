import React from "react";
import { styled, Typography } from "@mui/material";

import { membersMock } from "../../../mocks/homeMocks";
import MembersCard from "./MembersCard";

const Members = () => {
  return (
    <OuterWrapper id="members">
      <LineWrapper>
        <LineTitle variant="blockTitle" color="textColor.main">
          members
        </LineTitle>
      </LineWrapper>
      <Wrapper>
        {membersMock.map((elem) => (
          <MembersCard key={elem.id} {...elem} />
        ))}
      </Wrapper>
      <CubeImg src="/images/home/PartnersCube.png" />
    </OuterWrapper>
  );
};

const CubeImg = styled("img")({
  position: "absolute",
  right: "0",
  top: "90px",
  maxWidth: "500px",
  zIndex: "-1",

  "@media(max-width: 850px)": {
    top: "40px",
    maxWidth: "275px",
  },

  "@media(max-width: 600px)": {
    top: "174px",
    maxWidth: "225px",
  },
});

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  maxWidth: "877px",
  width: "100%",
  marginLeft: "auto",
  marginRight: "472px",

  [theme.breakpoints.down("xl")]: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "990px",
    width: "100%",
    marginLeft: "auto",
    marginRight: "172px",
  },

  "@media(max-width: 1400px)": {
    marginRight: "70px",
    maxWidth: "800px",
  },

  "@media(max-width: 1000px)": {
    maxWidth: "700px",
  },

  "@media(max-width: 850px)": {
    gap: "10px",
    maxWidth: "520px",
    marginTop: "40px",
  },

  "@media(max-width: 768px)": {
    marginRight: "100px",
  },

  "@media(max-width: 700px)": {
    marginRight: "50px",
  },

  "@media(max-width: 650px)": {
    marginRight: "20px",
  },

  "@media(max-width: 600px)": {
    padding: "0 20px",
  },
}));

const OuterWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  paddingBottom: "190px",
  paddingTop: "135px",

  [theme.breakpoints.down("xl")]: {
    paddingBottom: "260px",
    paddingTop: "100px",
  },

  "@media(max-width: 850px)": {
    paddingTop: "40px",
    paddingBottom: "150px",
  },

  "@media(max-width: 400px)": {
    paddingTop: "35px",
    paddingBottom: "100px",
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
  top: "0px",
  width: "18%",

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
    width: "13%",
  },

  "@media(max-width: 600px)": {
    left: "0",
    width: "100px",
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

export default Members;
