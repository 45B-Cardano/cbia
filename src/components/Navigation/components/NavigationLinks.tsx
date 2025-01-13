import React from "react";
import Link from "next/link";
import { styled, Typography } from "@mui/material";

import Button from "../../Button/Button";
import { navMock } from "../../../mocks/navMocks";

const NavigationLinks = () => {
  return (
    <Wrapper>
      {navMock.map((elem) => {
        return elem.isButton ? (
          <StyledButton key={elem.href} color="primary" href={elem.href}>
            {elem.icon}
            <StyledTypography variant="navText" color="textColor.dark">
              {elem.label}
            </StyledTypography>
          </StyledButton>
        ) : (
          <a href={elem.href}>
            <StyledTypography className="link" variant="navText" color="textColor.light">
              {elem.label}
            </StyledTypography>
          </a>
        );
      })}
    </Wrapper>
  );
};

const StyledButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "13px 23px 13px 21px",
  background: "white",
  borderRadius: "50px",
});

const StyledTypography = styled(Typography)({
  cursor: "pointer",
});

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "45px",
  alignItems: "center",

  "@media(max-width: 900px)": {
    gap: "20px",
  },

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default NavigationLinks;
