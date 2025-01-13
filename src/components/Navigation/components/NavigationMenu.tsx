import React, { useState } from "react";
import { Collapse, styled, Typography } from "@mui/material";
import Link from "next/link";

import Button from "../../Button/Button";
import IconButton from "../../Button/IconButton";
import { navMock } from "../../../mocks/navMocks";
import { CloseMenuIcon, DarkMobileLogo, MenuIcon } from "../../Icons/Icons";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonElement = navMock[navMock.length - 1];

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <IconButton className="menuIcon" onClick={handleToggle}>
        <MenuIcon />
      </IconButton>
      <StyledDropdown in={isOpen}>
        <Top>
          <Right>
            <DarkMobileLogo />
          </Right>
          <Left>
            <IconButton onClick={handleToggle}>
              <CloseMenuIcon />
            </IconButton>
          </Left>
        </Top>
        <Center>
          {navMock.slice(0, navMock.length - 1).map((elem) => (
            <Link key={elem.id} href={elem.href} passHref legacyBehavior>
              <a>
                <StyledTypography variant="navMenuLink" color="textColor.dark">
                  {elem.label}
                </StyledTypography>
              </a>
            </Link>
          ))}
        </Center>
        <Bottom>
          <StyledButton color="primary" href={buttonElement.href}>
            {buttonElement.icon}
            <Typography variant="navMenuLink" color="textColor.dark">
              {buttonElement.label}
            </Typography>
          </StyledButton>
        </Bottom>
      </StyledDropdown>
    </Wrapper>
  );
};

const Bottom = styled("div")({
  padding: "0px 33px 33px",
});

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

const Center = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "28px",
});

const Right = styled("div")({});

const Left = styled("div")({
  marginTop: "-23px",

  button: {
    width: "30px",
    height: "30px",
  },
});

const Top = styled("div")({
  padding: "14px 5px 0px 13px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

const StyledDropdown = styled(Collapse)({
  "&.MuiCollapse-root": {
    zIndex: "100",
    position: "absolute",
    top: 12,
    left: 12,
    right: 12,
    borderRadius: "16px",
    border: "2px solid rgba(255, 255, 255, 0.30)",
    background: "rgba(255, 255, 255, 0.80)",
    boxShadow:
      "0px 0px 0px 0px rgba(37, 58, 106, 0.07), 0px 4px 9px 0px rgba(37, 58, 106, 0.07), 0px 17px 17px 0px rgba(37, 58, 106, 0.06), 0px 39px 23px 0px rgba(37, 58, 106, 0.04), 0px 69px 28px 0px rgba(37, 58, 106, 0.01), 0px 108px 30px 0px rgba(37, 58, 106, 0.00)",
    backdropFilter: "blur(17.5px)",
  },

  "& .MuiCollapse-wrapperInner": {
    display: "flex",
    flexDirection: "column",
    gap: "27px",
    justifyContent: "center",
  },
});

const Wrapper = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export default NavigationMenu;
