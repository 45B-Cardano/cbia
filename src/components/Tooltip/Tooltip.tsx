import { TooltipProps, Tooltip as MuiTooltip, styled } from "@mui/material";
import React from "react";

interface CustomProps {}

type Props = CustomProps & TooltipProps;

const Tooltip = ({ ...props }: Props) => <StyledTooltip {...props} />;

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  "& .MuiTooltip-tooltip": {
    background: theme.palette.tooltip.colored,
  },
}));

export default Tooltip;
