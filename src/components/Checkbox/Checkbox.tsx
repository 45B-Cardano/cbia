import { styled, Checkbox as MuiCheckbox, CheckboxProps, Theme } from "@mui/material/";

interface CustomProps {
  variant?: "default" | "outlined";
}

const Checkbox = ({ variant = "default", ...props }: CustomProps & CheckboxProps) => (
  <CheckboxIcons
    checkedIcon={<CheckboxChecked>1</CheckboxChecked>}
    icon={<CheckboxDefault variant={variant} />}
    {...props}
  />
);

const CheckboxIcons = styled(MuiCheckbox)({
  margin: 0,
  padding: 0,
});

const CheckboxDefault = styled("div")<{ variant: "default" | "outlined" }>(({ theme, variant }) => ({
  width: "24px",
  height: "24px",
  borderRadius: theme.borderRadius.xxs,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...getCustomVariant(theme)[variant],
}));

const CheckboxChecked = styled("div")(({ theme }) => ({
  width: "24px",
  height: "24px",
  borderRadius: theme.borderRadius.xxs,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.checkbox.colored.main,

  "& svg": {
    width: "11px",
    height: "8px",
  },
}));

const getCustomVariant = (theme: Theme) => ({
  default: {
    backgroundColor: theme.palette.checkbox.default.main,
  },
  outlined: {
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.checkbox.colored.outlined}`,
  },
});

export default Checkbox;
