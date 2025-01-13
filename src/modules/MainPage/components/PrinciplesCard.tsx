import React, { FC } from "react";
import { styled, Typography } from "@mui/material";

interface Props {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  href: string;
}

const PrinciplesCard: FC<Props> = ({ icon, subtitle, title, href }) => {
  return (
    <Wrapper>
      {/*<Left>{icon}</Left>*/}
      <Left>
        <StyledImg src={href} />
      </Left>
      <Right>
        <Title variant="principlesCardTitle" color="textColor.dark">
          {title}
        </Title>
        <Subtitle variant="subtitle1" color="textColor.dark">
          {subtitle}
        </Subtitle>
      </Right>
    </Wrapper>
  );
};

const StyledImg = styled("img")({
  width: "150px",

  "@media(max-width: 1000px)": {
    width: "120px",
  },

  "@media(max-width: 768px)": {
    width: "80px",
    height: "170px",
    objectFit: "contain",
    marginLeft: "-20px",
  },

  "@media(max-width: 600px)": {
    width: "80px",
    height: "75px",
  },
});

const Title = styled(Typography)({});

const Subtitle = styled(Typography)({});

const Right = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  maxWidth: "278px",

  "@media(max-width: 768px)": {
    maxWidth: "226px",
    marginTop: "-90px",
  },

  "@media(max-width: 600px)": {
    maxWidth: "100%",
    marginTop: "0",
  },
});

const Left = styled("div")({
  "@media(max-width: 1000px)": {
    svg: {
      width: "120px",
    },
  },

  "@media(max-width: 768px)": {
    svg: {
      width: "80px",
      height: "170px",
      marginLeft: "-20px",
    },
  },

  "@media(max-width:600px)": {
    svg: {
      width: "80px",
      height: "75px",
    },
  },
});

const Wrapper = styled("div")({
  display: "flex",
  gap: "45px",

  "@media(max-width: 768px)": {
    flexDirection: "column",
    maxWidth: "226px",
    width: "100%",
  },

  "@media(max-width: 600px)": {
    flexDirection: "row",
    maxWidth: "100%",
    gap: "30px",
  },
});

export default PrinciplesCard;
