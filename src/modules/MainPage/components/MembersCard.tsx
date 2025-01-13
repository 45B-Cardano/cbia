import React, { FC } from "react";
import { styled } from "@mui/material";

interface Props {
  src: string;
  href: string;
}

const MembersCard: FC<Props> = ({ src, href }) => {
  return (
    <Wrapper href={href} target="_blank" rel="noreferrer">
      <StyledImg src={src} />
    </Wrapper>
  );
};

const StyledImg = styled("img")({
  width: "55%",
});

const Wrapper = styled("a")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "calc(33% - 11px)",
  borderRadius: "35px",
  border: "2px solid rgba(255, 255, 255, 0.50)",
  background: "rgba(255, 255, 255, 0.80)",
  boxShadow:
    "0px 0px 0px 0px rgba(63, 80, 120, 0.02), 3px 5px 13px 0px rgba(63, 80, 120, 0.02), 12px 20px 23px 0px rgba(63, 80, 120, 0.02), 26px 45px 31px 0px rgba(63, 80, 120, 0.01), 47px 81px 37px 0px rgba(63, 80, 120, 0.00), 73px 126px 41px 0px rgba(63, 80, 120, 0.00)",
  backdropFilter: "blur(37.5px)",
  minHeight: "214px",

  "@media(max-width: 850px)": {
    minHeight: "111px",
    width: "calc(33% - 5px)",

    img: {
      width: "65%",
    },
  },

  "@media(max-width: 600px)": {
    width: "calc(50% - 5px)",
  },
});

export default MembersCard;
