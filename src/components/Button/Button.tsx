import { Button as MuiButton, ButtonProps as MUIButtonProps, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";

export interface CustomButtonProps {
  size?: "small" | "medium";
  variant?: "contained" | "outlined";
  color?: "primary" | "colored" | "dark";
}

export type ButtonProps = Omit<MUIButtonProps, "size" | "variant" | "color"> & CustomButtonProps;

const Button: FC<ButtonProps> = ({
  children,
  size = "small",
  variant = "contained",
  color = "colored",
  onClick,
  ...props
}) => {
  const ButtonStyled = styled((props: MUIButtonProps) => <MuiButton {...props} />)(({ theme }) => ({
    ...getCustomSize(theme)[size],
    ...getCustomColor(theme)[color],
    ...getCustomVariant(theme)[variant],
    textTransform: "none",
  }));

  return (
    <ButtonStyled {...props} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

const getCustomVariant = (theme: Theme) => ({
  contained: {
    border: "none",
  },
  outlined: {
    borderWidth: "1px",
    borderStyle: "solid",
    background: "transparent",

    "&:hover": {},
  },
});

const getCustomColor = (theme: Theme) => ({
  primary: {
    backgroundColor: theme.palette.button.primary.main,
    borderColor: theme.palette.button.primary.main,
    color: "#000000",

    "&:hover": {
      backgroundColor: "#E6E6E6",
    },

    "&:disabled": {
      color: "#B3B3B3",
      backgroundColor: "#CCCCCC",
    },

    "& svg": {
      fill: theme.palette.button.primary.dark,
    },
  },
  colored: {
    color: "#fff",
    backgroundColor: theme.palette.button.colored.main,
    borderColor: theme.palette.button.colored.main,

    "&:hover": {
      backgroundColor: "#D166E0",
    },

    "&:disabled": {
      backgroundColor: "#EBBBF1",
      color: "#DE91E9",
    },
  },
  dark: {
    color: theme.palette.button.primary.main,
    backgroundColor: theme.palette.button.dark.main,
    borderColor: theme.palette.button.dark.main,

    "&:hover": {
      backgroundColor: "#333333",
    },

    "&:disabled": {
      backgroundColor: "#666666",
    },

    "& svg": {
      fill: theme.palette.button.primary.main,
    },
  },
});

const getCustomSize = (theme: Theme) => ({
  medium: {
    padding: "30px 69px",
    borderRadius: theme.borderRadius.md,
  },
  small: {
    padding: "10px 32px",
    borderRadius: theme.borderRadius.sm,
  },
});

export default Button;
