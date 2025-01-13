import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps, styled, Theme } from "@mui/material";
import React from "react";

interface IconButtonCustomProps {
  variant?: "dark" | "light";
  noFill?: boolean;
  children: React.ReactNode;
  href?: string;
  target?: string;
}

export type IconButtonProps = MuiIconButtonProps & IconButtonCustomProps;

const IconButton = ({ children, noFill = false, href, variant = "dark", ...props }: IconButtonProps) => (
  <StyledIconButton variant={variant} noFill={noFill} {...props}>
    <SocialRef target="_blank" href={href}>
      {children}
    </SocialRef>
  </StyledIconButton>
);

const StyledIconButton = styled(MuiIconButton, {
  shouldForwardProp: (prop) => prop !== "variant" && prop !== "noFill",
})<{ variant: "dark" | "light"; noFill: boolean }>(({ theme, variant, noFill }) => ({
  // padding: "0px",
  ...getCustomVariant(theme, noFill)[variant],
}));

const SocialRef = styled("a")({
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const getCustomVariant = (theme: Theme, noFill: boolean) => ({
  dark: {
    "& svg": {
      fill: noFill ? "none" : theme.palette.social.dark,
    },
    rect: {
      stroke: theme.palette.social.dark,
      fill: theme.palette.social.dark,
    },
  },
  light: {
    "& svg": {
      fill: noFill ? "none" : theme.palette.social.light,
    },
    rect: {
      stroke: theme.palette.social.light,
      fill: theme.palette.social.light,
    },
  },
});

export default IconButton;
