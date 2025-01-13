import React, { FC } from "react";
import { styled, Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
  title: string;
}

const BlockLayout: FC<Props> = ({ children, title }) => {
  return (
    <Wrapper id="who-we-are">
      <LineWrapper>
        <LineTitle variant="blockTitle" color="textColor.main">
          {title}
        </LineTitle>
      </LineWrapper>
      {children}
    </Wrapper>
  );
};

const LineTitle = styled(Typography)({
  textTransform: "uppercase",
});

const LineWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  position: "absolute",
  left: "15%",
  top: "0",
  width: "350px",

  [theme.breakpoints.down("xl")]: {
    left: "10%",
    width: "30%",
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

  "@media(max-width: 600px)": {
    left: "0",
    width: "120px",
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

const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  paddingTop: "75px",

  [theme.breakpoints.down("xl")]: {
    paddingTop: "60px",
  },
}));

export default BlockLayout;
