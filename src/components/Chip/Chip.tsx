import { Chip as MuiChip, ChipProps as MUIChipProps, styled, Theme } from "@mui/material";
import { FC } from "react";

export type CustomChipColor = "primary" | "default" | "custom";

interface CustomChipProps {
  color?: CustomChipColor;
  hexColor?: string;
}
export type ChipProps = Omit<MUIChipProps, "color"> & CustomChipProps;

const Chip: FC<ChipProps> = ({ color = "default", hexColor = "#FFFFFF", ...props }) => {
  const StyledChip = styled(MuiChip)(({ theme }) => ({
    padding: "8px 10px",
    cursor: "pointer",
    ...theme.typography.subtitle1,
    ...getCustomColor(theme, hexColor)[color as CustomChipColor],

    "& .MuiChip-label": {
      padding: 0,
    },
  }));

  return <StyledChip {...props} />;
};

const getCustomColor = (theme: Theme, hexColor: string) => ({
  primary: {
    backgroundColor: theme.palette.chip.primary.backgroundColor,
    color: theme.palette.chip.primary.color,
    borderRadius: theme.borderRadius.xs,

    "&:hover": {
      backgroundColor: theme.palette.chip.primary.backgroundColor,
      color: theme.palette.chip.primary.color,
    },
  },
  default: {
    background: "transparent",
    color: theme.palette.chip.default.color,
    borderRadius: theme.borderRadius.xs,
  },
  custom: {
    backgroundColor: hexColor,
    color: theme.palette.chip.colored.color,
    borderRadius: theme.borderRadius.xs,

    "&:hover": {
      backgroundColor: hexColor,
      color: theme.palette.chip.colored.color,
    },
  },
});

export default Chip;
