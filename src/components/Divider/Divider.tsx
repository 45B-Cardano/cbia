import React from "react";
import { Divider as MuiDivider, DividerProps, styled } from "@mui/material";

interface CustomProps {
  color?: "default" | "dark" | "light";
}

type Props = CustomProps & DividerProps;

const Divider = ({ color = "default", ...props }: Props) => <StyledDivider color={color} {...props} />;

const StyledDivider = styled(MuiDivider, {
  shouldForwardProp: (prop) => prop !== "color",
})<{ color: "default" | "dark" | "light" }>(({ theme, color }) => ({
  width: "100%",

  ...getCustomColor[color],
}));

const getCustomColor = {
  default: {
    background: "#4D4D4D",
  },
  dark: {
    background: "#333333",
  },
  light: {
    background: "#CCCCCC",
  },
};

export default Divider;
