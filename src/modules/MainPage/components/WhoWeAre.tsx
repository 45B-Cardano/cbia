import React from "react";
import { styled, Typography } from "@mui/material";

import BlockLayout from "../../../layouts/BlockLayout";
import { CbiaChipIcon } from "../../../components/Icons/CbiaChipIcon";

const WhoWeAre = () => {
  return (
    <BlockLayout title="who we are">
      <Wrapper>
        <Title variant="h2" color="textColor.dark">
          The Cardano Blockchain Infrastructure Alliance
          <CbiaChipIcon />
        </Title>
        <Subtitle variant="subtitle2" color="textColor.main">
          CBIA members are solving the biggest challenges faced by builders on Cardano. We bring together experts,
          innovators and industry leaders that have shaped the Cardano ecosystem with blockchain infrastructure and
          tooling
        </Subtitle>
      </Wrapper>
    </BlockLayout>
  );
};

const Title = styled(Typography)({
  fontFamily: "General Sans Variable, sans-serif",

  svg: {
    marginBottom: "-10px",
    marginLeft: "7px",

    "@media(max-width: 768px)": {
      width: "60px",
      marginBottom: "-20px",
    },
  },
});

const Subtitle = styled(Typography)(({ theme }) => ({
  maxWidth: "620px",

  [theme.breakpoints.down("xl")]: {
    maxWidth: "510px",
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "760px",
  gap: "32px",
  paddingBottom: "210px",

  [theme.breakpoints.down("xl")]: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "350px",
    gap: "32px",
    paddingBottom: "210px",
  },

  "@media(max-width: 1100px)": {
    marginRight: "100px",
  },

  "@media(max-width: 850px)": {
    marginRight: "0",
  },

  "@media(max-width: 768px)": {
    marginRight: "0",
    maxWidth: "540px",
    gap: "20px",
    paddingBottom: "167px",
  },

  "@media(max-width: 630px)": {
    padding: "0 20px",
    paddingBottom: "190px",
  },

  "@media(max-width: 400px)": {
    gap: "15px",
  },
}));

export default WhoWeAre;
